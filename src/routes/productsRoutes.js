const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/create', productsController.create);
router.post('/', productsController.store);
router.get('/cart', productsController.cart);
router.get('/detail/:id', productsController.detail);
router.get('/edit/:id', productsController.edit);
router.post('/edit/:id', productsController.update);

router.get('/:id/edit', (req, res) => {
  res.redirect('/products/edit/' + req.params.id);
});
router.get('/:id', (req, res) => {
  res.redirect('/products/detail/' + req.params.id);
});

module.exports = router;
