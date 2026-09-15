const db = require('../../database/models');
const { productInclude } = require('../../database/presenters');
const { PAGE_SIZE, absoluteUrl, pageNumber, paginationUrls } = require('../../utils/apiHelpers');

function relationArray(record) {
  if (!record) return [];
  return [{ id: record.id, name: record.name }];
}

async function countByCategory() {
  const categories = await db.ProductCategory.findAll({
    attributes: ['name'],
    include: [{ association: 'products', attributes: ['id'] }]
  });

  return categories.reduce((totals, category) => {
    totals[category.name] = category.products.length;
    return totals;
  }, {});
}

function publicProduct(product, req) {
  const json = product.toJSON();
  json.price = Number(json.price);
  json.image = absoluteUrl(req, json.image);
  json.categories = relationArray(product.category);
  json.colors = relationArray(product.color);
  json.brands = relationArray(product.brand);
  json.zones = relationArray(product.zone);
  delete json.category;
  delete json.color;
  delete json.brand;
  delete json.zone;
  return json;
}

module.exports = {
  async list(req, res) {
    try {
      const page = pageNumber(req);
      const { count, rows } = await db.Product.findAndCountAll({
        include: [{ association: 'category', attributes: ['id', 'name'] }],
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE,
        order: [['id', 'ASC']],
        distinct: true
      });

      const { next, previous } = paginationUrls(req, count, page);

      res.json({
        count,
        countByCategory: await countByCategory(),
        products: rows.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          categories: relationArray(product.category),
          detail: absoluteUrl(req, `/api/products/${product.id}`)
        })),
        next,
        previous
      });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo listar productos' });
    }
  },

  async detail(req, res) {
    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: productInclude
      });
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json(publicProduct(product, req));
    } catch (error) {
      res.status(500).json({ error: 'No se pudo obtener el producto' });
    }
  }
};
