const products = require('../data/products');

const mainController = {
  home: (req, res) => {
    const destacados = products.slice(0, 3);
    const caba = products.filter((item) => item.zone === 'CABA');
    const gba = products.filter((item) => item.zone === 'GBA');

    res.render('products/home', {
      title: 'RendiYa — Autos y motos para tu prueba de manejo',
      destacados,
      caba,
      gba
    });
  },
  cart: (req, res) => {
    const product = products[0];
    res.render('products/productCart', {
      title: 'Carrito — RendiYa',
      product,
      instructor: true
    });
  }
};

module.exports = mainController;
