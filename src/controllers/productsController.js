const { Op } = require('sequelize');
const db = require('../database/models');
const { presentProduct, productInclude } = require('../database/presenters');

function imageFromRequest(req, currentImage) {
  if (req.file) {
    return '/images/' + req.file.filename;
  }
  if (req.body.image && req.body.image.trim()) {
    return req.body.image.trim();
  }
  return currentImage || '/images/etios.jpg';
}

async function catalogs() {
  const [categories, brands, colors, zones] = await Promise.all([
    db.ProductCategory.findAll({ order: [['name', 'ASC']] }),
    db.Brand.findAll({ order: [['name', 'ASC']] }),
    db.Color.findAll({ order: [['name', 'ASC']] }),
    db.Zone.findAll({ order: [['name', 'ASC']] })
  ]);
  return {
    productCategories: categories.map((row) => row.get({ plain: true })),
    brands: brands.map((row) => row.get({ plain: true })),
    colors: colors.map((row) => row.get({ plain: true })),
    zones: zones.map((row) => row.get({ plain: true }))
  };
}

async function payloadFromBody(req, current) {
  const productCategoryId = Number(req.body.productCategoryId) || (current && current.productCategoryId) || 1;
  const category = await db.ProductCategory.findByPk(productCategoryId);
  const isMoto = category && category.name === 'Moto';

  return {
    name: req.body.name,
    description: req.body.description,
    image: imageFromRequest(req, current && current.image),
    price: Number(req.body.price) || 0,
    productCategoryId,
    brandId: Number(req.body.brandId) || (current && current.brandId) || 1,
    colorId: Number(req.body.colorId) || (current && current.colorId) || 1,
    zoneId: Number(req.body.zoneId) || (current && current.zoneId) || 1,
    transmission: req.body.transmission || (current && current.transmission) || 'Manual',
    license: isMoto ? 'Clase A' : 'Clase B',
    vtv: true,
    insurance: true
  };
}

const productsController = {
  list: async (req, res) => {
    const { category, zone, q } = req.query;
    const where = {};
    const include = productInclude.map((item) => ({ ...item }));

    if (q) {
      where.name = { [Op.like]: '%' + q + '%' };
    }
    if (category) {
      include[0] = { association: 'category', where: { name: category }, required: true };
    }
    if (zone) {
      include[3] = { association: 'zone', where: { name: zone }, required: true };
    }

    const rows = await db.Product.findAll({ where, include, order: [['id', 'ASC']] });
    res.render('products/productList', {
      title: 'Catálogo — RendiYa',
      products: rows.map(presentProduct),
      category: category || '',
      zone: zone || '',
      q: q || ''
    });
  },

  detail: async (req, res) => {
    const row = await db.Product.findByPk(req.params.id, { include: productInclude });
    if (!row) {
      return res.redirect('/products');
    }
    res.render('products/productDetail', {
      title: `${row.name} — RendiYa`,
      product: presentProduct(row)
    });
  },

  cart: async (req, res) => {
    const row = req.query.id
      ? await db.Product.findByPk(req.query.id, { include: productInclude })
      : await db.Product.findOne({ include: productInclude, order: [['id', 'ASC']] });
    res.render('products/productCart', {
      title: 'Carrito — RendiYa',
      product: presentProduct(row),
      instructor: true
    });
  },

  create: async (req, res) => {
    const options = await catalogs();
    res.render('products/productCreate', {
      title: 'Alta de vehículo — RendiYa',
      productCategories: options.productCategories,
      brands: options.brands,
      colors: options.colors,
      zones: options.zones
    });
  },

  store: async (req, res) => {
    const product = await db.Product.create(await payloadFromBody(req));
    res.redirect('/products/' + product.id);
  },

  edit: async (req, res) => {
    const row = await db.Product.findByPk(req.params.id, { include: productInclude });
    if (!row) {
      return res.redirect('/products');
    }
    const options = await catalogs();
    res.render('products/productEdit', {
      title: `Editar ${row.name} — RendiYa`,
      product: presentProduct(row),
      productCategories: options.productCategories,
      brands: options.brands,
      colors: options.colors,
      zones: options.zones
    });
  },

  update: async (req, res) => {
    const row = await db.Product.findByPk(req.params.id);
    if (!row) {
      return res.redirect('/products');
    }
    await row.update(await payloadFromBody(req, row));
    res.redirect('/products/' + req.params.id);
  },

  destroy: async (req, res) => {
    const row = await db.Product.findByPk(req.params.id);
    if (row) {
      await db.CartItem.destroy({ where: { productId: row.id } });
      await row.destroy();
    }
    res.redirect('/products');
  }
};

module.exports = productsController;
