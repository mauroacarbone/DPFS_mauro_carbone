const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/cart', mainController.cart);
router.get('/productCart', mainController.cart);

module.exports = router;
