const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { presentUser } = require('../database/presenters');
const { firstErrors } = require('../middlewares/validations');

const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

async function findUserByEmail(email) {
  return db.User.findOne({
    where: { email },
    include: ['category']
  });
}

async function findUserById(id) {
  return db.User.findByPk(id, { include: ['category'] });
}

function login(req, res) {
  res.render('users/login', {
    title: 'Ingresar — RendiYa',
    errors: {},
    old: {}
  });
}

async function processLogin(req, res) {
  const email = (req.body.email || '').trim();
  const errors = firstErrors(req);

  if (Object.keys(errors).length) {
    const mapped = errors.password && errors.password.indexOf('incorrectos') !== -1
      ? { credentials: errors.password }
      : errors;
    return res.render('users/login', {
      title: 'Ingresar — RendiYa',
      errors: mapped,
      old: { email }
    });
  }

  const stored = await findUserByEmail(email);
  req.session.user = presentUser(stored);

  if (req.body.remember) {
    res.cookie('rememberEmail', stored.email, { maxAge: THIRTY_DAYS });
  } else {
    res.clearCookie('rememberEmail');
  }

  return res.redirect('/users/profile');
}

function register(req, res) {
  res.render('users/register', {
    title: 'Crear cuenta — RendiYa',
    errors: {},
    old: {}
  });
}

async function processRegister(req, res) {
  const firstName = (req.body.firstName || '').trim();
  const lastName = (req.body.lastName || '').trim();
  const email = (req.body.email || '').trim();
  const categoryName = req.body.category || 'client';
  const errors = firstErrors(req);

  if (Object.keys(errors).length) {
    return res.render('users/register', {
      title: 'Crear cuenta — RendiYa',
      errors,
      old: { firstName, lastName, email, category: categoryName }
    });
  }

  const userCategory = await db.UserCategory.findOne({ where: { name: categoryName } })
    || await db.UserCategory.findOne({ where: { name: 'client' } });

  const user = await db.User.create({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(req.body.password, 10),
    image: req.file ? '/images/users/' + req.file.filename : '/images/favicon.png',
    userCategoryId: userCategory.id
  });

  const created = await findUserById(user.id);
  req.session.user = presentUser(created);
  return res.redirect('/users/profile');
}

async function list(req, res) {
  const rows = await db.User.findAll({ include: ['category'], order: [['id', 'ASC']] });
  res.render('users/userList', {
    title: 'Usuarios — RendiYa',
    users: rows.map(presentUser)
  });
}

async function profile(req, res) {
  const row = await findUserById(req.session.user.id);
  req.session.user = presentUser(row);
  res.render('users/profile', {
    title: 'Mi perfil — RendiYa',
    profileUser: presentUser(row)
  });
}

async function detail(req, res) {
  const row = await findUserById(req.params.id);
  if (!row) {
    return res.redirect('/users');
  }
  res.render('users/userDetail', {
    title: `${row.firstName} — RendiYa`,
    profileUser: presentUser(row)
  });
}

async function edit(req, res) {
  const row = await findUserById(req.params.id);
  if (!row) {
    return res.redirect('/users/profile');
  }
  const isOwn = req.session.user.id === row.id;
  const isAdmin = req.session.user.category === 'admin';
  if (!isOwn && !isAdmin) {
    return res.redirect('/users/profile');
  }
  const categories = await db.UserCategory.findAll({ order: [['id', 'ASC']] });
  res.render('users/userEdit', {
    title: 'Editar perfil — RendiYa',
    profileUser: presentUser(row),
    userCategories: categories.map((item) => item.get({ plain: true }))
  });
}

async function update(req, res) {
  const row = await findUserById(req.params.id);
  if (!row) {
    return res.redirect('/users/profile');
  }
  const isOwn = req.session.user.id === row.id;
  const isAdmin = req.session.user.category === 'admin';
  if (!isOwn && !isAdmin) {
    return res.redirect('/users/profile');
  }

  const firstName = (req.body.firstName || '').trim();
  const lastName = (req.body.lastName || '').trim();
  const email = (req.body.email || '').trim();
  let userCategoryId = row.userCategoryId;
  if (isAdmin && req.body.userCategoryId) {
    userCategoryId = Number(req.body.userCategoryId);
  }

  const data = {
    firstName: firstName || row.firstName,
    lastName: lastName || row.lastName,
    email: email || row.email,
    userCategoryId
  };

  if (req.file) {
    data.image = '/images/users/' + req.file.filename;
  }
  if (req.body.password && req.body.password.length >= 8) {
    data.password = bcrypt.hashSync(req.body.password, 10);
  }

  await row.update(data);
  const updated = await findUserById(row.id);
  if (isOwn) {
    req.session.user = presentUser(updated);
  }
  return res.redirect('/users/' + row.id);
}

function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie('rememberEmail');
    res.redirect('/');
  });
}

module.exports = {
  login,
  processLogin,
  register,
  processRegister,
  list,
  profile,
  detail,
  edit,
  update,
  logout
};
