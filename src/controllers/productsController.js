const products = require('../data/products');

function findById(id) {
  return products.find((item) => item.id === Number(id));
}

const productsController = {
  list: (req, res) => {
    const { category, zone, q } = req.query;
    let list = [...products];

    if (category) {
      list = list.filter((item) => item.category === category);
    }
    if (zone) {
      list = list.filter((item) => item.zone === zone);
    }
    if (q) {
      const term = q.toLowerCase();
      list = list.filter((item) => item.name.toLowerCase().includes(term));
    }

    res.render('products/productList', {
      title: 'Catálogo — RendiYa',
      products: list,
      category: category || '',
      zone: zone || '',
      q: q || ''
    });
  },

  detail: (req, res) => {
    const product = findById(req.params.id);
    if (!product) {
      return res.redirect('/products');
    }
    res.render('products/productDetail', {
      title: `${product.name} — RendiYa`,
      product
    });
  },

  create: (req, res) => {
    res.render('products/productCreate', {
      title: 'Alta de vehículo — RendiYa'
    });
  },

  store: (req, res) => {
    const nextId = products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1;
    products.push({
      id: nextId,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image || '/images/hero-auto.jpg',
      category: req.body.category,
      zone: req.body.zone || 'CABA',
      transmission: req.body.transmission,
      license: req.body.category === 'Moto' ? 'Clase A' : 'Clase B',
      price: Number(req.body.price) || 0,
      vtv: true,
      insurance: true
    });
    res.redirect('/products');
  },

  edit: (req, res) => {
    const product = findById(req.params.id);
    if (!product) {
      return res.redirect('/products');
    }
    res.render('products/productEdit', {
      title: `Editar ${product.name} — RendiYa`,
      product
    });
  },

  update: (req, res) => {
    const product = findById(req.params.id);
    if (product) {
      product.name = req.body.name;
      product.description = req.body.description;
      product.image = req.body.image || product.image;
      product.category = req.body.category;
      product.zone = req.body.zone || product.zone;
      product.transmission = req.body.transmission;
      product.price = Number(req.body.price) || product.price;
    }
    res.redirect('/products/' + req.params.id);
  }
};

module.exports = productsController;
