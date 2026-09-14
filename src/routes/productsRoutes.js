const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/create', productsController.create);
router.post('/', productsController.store);
router.get('/:id/edit', productsController.edit);
router.post('/:id', productsController.update);
router.get('/:id', productsController.detail);

module.exports = router;
