const express = require('express');
const apiProductsController = require('../controllers/api/productsController');

const router = express.Router();

router.get('/', apiProductsController.list);
router.get('/:id', apiProductsController.detail);

module.exports = router;
