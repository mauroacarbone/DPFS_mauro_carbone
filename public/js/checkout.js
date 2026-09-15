(function () {
  const form = document.getElementById('form-checkout');
  if (!form) return;

  const cartBadge = document.querySelector('.cart-badge');

  function finishSuccess() {
    if (cartBadge) cartBadge.textContent = '0';
    window.location.href = '/';
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Enviando…';

    await new Promise(function (resolve) {
      setTimeout(resolve, 500);
    });

    if (cartBadge) cartBadge.textContent = '0';

    if (window.Swal) {
      await window.Swal.fire({
        icon: 'success',
        title: '¡Compra finalizada!',
        text: 'El pago de prueba se procesó correctamente. El carrito ha sido vaciado.',
        confirmButtonText: 'Entendido',
        background: '#151b2b',
        color: '#f4f7ff',
        iconColor: '#34d399',
        confirmButtonColor: '#34d399'
      });
    }

    finishSuccess();
  });
})();
