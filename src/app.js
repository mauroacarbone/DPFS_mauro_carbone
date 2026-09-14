const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: 'rendiya-secret',
  resave: false,
  saveUninitialized: false
}));
app.use(userLoggedMiddleware);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/', usersRoutes);
app.use('/users', usersRoutes);

app.use((req, res) => {
  res.status(404).redirect('/');
});

app.listen(PORT, () => {
  console.log(`RendiYa en http://localhost:${PORT}`);
});
