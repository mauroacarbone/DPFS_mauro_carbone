document.addEventListener('DOMContentLoaded', function () {
  rendiyaForms.bindForm(document.getElementById('form-login'), {
    email: {
      required: 'Ingresá un email.',
      email: 'El email no es válido.'
    },
    password: {
      required: 'Ingresá la contraseña.'
    }
  });
});
