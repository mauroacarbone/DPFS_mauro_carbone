document.addEventListener('DOMContentLoaded', function () {
  rendiyaForms.bindForm(document.getElementById('form-product'), {
    name: {
      required: 'Ingresá el nombre del vehículo.',
      min: 5,
      minMessage: 'El nombre debe tener al menos 5 caracteres.'
    },
    description: {
      required: 'Ingresá una descripción.',
      min: 20,
      minMessage: 'La descripción debe tener al menos 20 caracteres.'
    },
    imageFile: {
      image: 'La imagen debe ser JPG, JPEG, PNG o GIF.'
    }
  });
});
