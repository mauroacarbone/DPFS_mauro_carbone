const bcrypt = require('bcryptjs');
const userService = require('../services/userService');

const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30;

function login(req, res) {
  res.render('users/login', {
    title: 'Ingresar — RendiYa',
    errors: {},
    old: {}
  });
}

function processLogin(req, res) {
  const email = (req.body.email || '').trim();
  const password = req.body.password || '';
  const stored = userService.findByEmail(email);
  const ok = stored && bcrypt.compareSync(password, stored.password);

  if (!ok) {
    return res.render('users/login', {
      title: 'Ingresar — RendiYa',
      errors: { credentials: 'Email o contraseña incorrectos.' },
      old: { email }
    });
  }

  req.session.user = userService.publicUser(stored);

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

function processRegister(req, res) {
  const firstName = (req.body.firstName || '').trim();
  const lastName = (req.body.lastName || '').trim();
  const email = (req.body.email || '').trim();
  const password = req.body.password || '';
  const passwordConfirm = req.body.passwordConfirm || '';
  const category = req.body.category || 'client';
  const errors = {};

  if (!firstName) errors.firstName = 'Ingresá tu nombre.';
  if (!lastName) errors.lastName = 'Ingresá tu apellido.';
  if (!email) errors.email = 'Ingresá un email.';
  if (email && userService.findByEmail(email)) {
    errors.email = 'Ya hay una cuenta con este email.';
  }
  if (!password || password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres.';
  }
  if (password !== passwordConfirm) {
    errors.passwordConfirm = 'Las contraseñas no coinciden.';
  }

  if (Object.keys(errors).length) {
    return res.render('users/register', {
      title: 'Crear cuenta — RendiYa',
      errors,
      old: { firstName, lastName, email, category }
    });
  }

  const users = userService.readUsers();
  const image = req.file
    ? '/images/users/' + req.file.filename
    : '/images/favicon.png';

  const user = {
    id: userService.nextId(users),
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    category,
    image
  };

  users.push(user);
  userService.writeUsers(users);
  req.session.user = userService.publicUser(user);

  return res.redirect('/users/profile');
}

function profile(req, res) {
  res.render('users/profile', {
    title: 'Mi perfil — RendiYa'
  });
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
  profile,
  logout
};
