const productService = require('../services/productService');

function imageFromRequest(req, currentImage) {
  if (req.file) {
    return '/images/' + req.file.filename;
  }
  if (req.body.image && req.body.image.trim()) {
    return req.body.image.trim();
  }
  return currentImage || '/images/etios.jpg';
}

function payloadFromBody(req, current) {
  const category = req.body.category || (current && current.category) || 'Auto';
  return {
    name: req.body.name,
    description: req.body.description,
    image: imageFromRequest(req, current && current.image),
    category,
    colors: req.body.colors || 'Blanco',
    price: Number(req.body.price) || 0,
    zone: req.body.zone || 'CABA',
    transmission: req.body.transmission || 'Manual',
    license: category === 'Moto' ? 'Clase A' : 'Clase B',
    vtv: true,
    insurance: true
  };
}

const productsController = {
  list: (req, res) => {
    const { category, zone, q } = req.query;
    let list = productService.readProducts();

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
    const product = productService.findById(req.params.id);
    if (!product) {
      return res.redirect('/products');
    }
    res.render('products/productDetail', {
      title: `${product.name} — RendiYa`,
      product
    });
  },

  cart: (req, res) => {
    const products = productService.readProducts();
    const product = productService.findById(req.query.id) || products[0];
    res.render('products/productCart', {
      title: 'Carrito — RendiYa',
      product,
      instructor: true
    });
  },

  create: (req, res) => {
    res.render('products/productCreate', {
      title: 'Alta de vehículo — RendiYa'
    });
  },

  store: (req, res) => {
    const products = productService.readProducts();
    const product = {
      id: productService.nextId(products),
      ...payloadFromBody(req)
    };
    products.push(product);
    productService.writeProducts(products);
    res.redirect('/products/' + product.id);
  },

  edit: (req, res) => {
    const product = productService.findById(req.params.id);
    if (!product) {
      return res.redirect('/products');
    }
    res.render('products/productEdit', {
      title: `Editar ${product.name} — RendiYa`,
      product
    });
  },

  update: (req, res) => {
    const products = productService.readProducts();
    const index = products.findIndex((item) => item.id === Number(req.params.id));
    if (index === -1) {
      return res.redirect('/products');
    }
    products[index] = {
      ...products[index],
      ...payloadFromBody(req, products[index])
    };
    productService.writeProducts(products);
    res.redirect('/products/' + req.params.id);
  },

  destroy: (req, res) => {
    const products = productService.readProducts().filter((item) => item.id !== Number(req.params.id));
    productService.writeProducts(products);
    res.redirect('/products');
  }
};

module.exports = productsController;
