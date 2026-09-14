const express = require('express');
const path = require('path');
const multer = require('multer');
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

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
router.get('/create', authMiddleware, productsController.create);
router.post('/', authMiddleware, upload.single('imageFile'), productsController.store);
router.get('/cart', productsController.cart);
router.get('/detail/:id', (req, res) => res.redirect('/products/' + req.params.id));
router.get('/edit/:id', (req, res) => res.redirect('/products/' + req.params.id + '/edit'));
router.get('/:id/edit', authMiddleware, productsController.edit);
router.put('/:id', authMiddleware, upload.single('imageFile'), productsController.update);
router.delete('/:id', authMiddleware, productsController.destroy);
router.get('/:id', productsController.detail);

module.exports = router;
