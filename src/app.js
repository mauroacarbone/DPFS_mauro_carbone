const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const db = require('./database/models');
const { seedIfEmpty } = require('./database/seed');
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const apiUsersRoutes = require('./routes/apiUsersRoutes');
const apiProductsRoutes = require('./routes/apiProductsRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cors = require('./middlewares/cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: 'rendiya-secret',
  resave: false,
  saveUninitialized: false
}));
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  return userLoggedMiddleware(req, res, next);
});
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/api', cors);
app.use('/api/users', apiUsersRoutes);
app.use('/api/products', apiProductsRoutes);

const centralDir = path.join(__dirname, '..', 'dashboard', 'dist');
app.use('/central', express.static(centralDir));
app.use('/central', (req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }
  res.sendFile(path.join(centralDir, 'index.html'), (error) => {
    if (error) next(error);
  });
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Endpoint no encontrado' });
});

app.use((req, res) => {
  res.status(404).redirect('/');
});

db.sequelize.sync()
  .then(() => seedIfEmpty())
  .then(() => {
    app.listen(PORT, () => {
      console.log(`RendiYa en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('No se pudo conectar la base de datos', error);
    process.exit(1);
  });
