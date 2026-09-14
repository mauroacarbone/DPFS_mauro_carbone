const productService = require('../services/productService');

const mainController = {
  home: (req, res) => {
    const products = productService.readProducts();
    const destacados = products.slice(0, 3);
    const caba = products.filter((item) => item.zone === 'CABA');
    const gba = products.filter((item) => item.zone === 'GBA');

    res.render('products/home', {
      title: 'RendiYa — Autos y motos para tu prueba de manejo',
      destacados,
      caba,
      gba
    });
  }
};

module.exports = mainController;
