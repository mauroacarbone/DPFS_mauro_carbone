const express = require('express');
const path = require('path');
const multer = require('multer');
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'public', 'images'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, 'producto-' + Date.now() + ext);
  }
});

const upload = multer({ storage });
const router = express.Router();

router.get('/', productsController.list);
router.get('/create', productsController.create);
router.post('/', upload.single('imageFile'), productsController.store);
router.get('/cart', productsController.cart);
router.get('/detail/:id', (req, res) => res.redirect('/products/' + req.params.id));
router.get('/edit/:id', (req, res) => res.redirect('/products/' + req.params.id + '/edit'));
router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('imageFile'), productsController.update);
router.delete('/:id', productsController.destroy);
router.get('/:id', productsController.detail);

module.exports = router;
