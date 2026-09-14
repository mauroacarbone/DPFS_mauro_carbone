const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'products.json');

function readProducts() {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function writeProducts(products) {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
}

function findById(id) {
  return readProducts().find((item) => item.id === Number(id));
}

function nextId(products) {
  return products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1;
}

module.exports = {
  readProducts,
  writeProducts,
  findById,
  nextId
};
