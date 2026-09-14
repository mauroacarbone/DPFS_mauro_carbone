const usersController = {
  login: (req, res) => {
    res.render('users/login', {
      title: 'Ingresar — RendiYa',
      showErrors: true
    });
  },
  register: (req, res) => {
    res.render('users/register', {
      title: 'Crear cuenta — RendiYa',
      showErrors: true
    });
  }
};

module.exports = usersController;
