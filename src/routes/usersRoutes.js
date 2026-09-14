const express = require('express');
const path = require('path');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'public', 'images', 'users'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, 'user-' + Date.now() + ext);
  }
});

const upload = multer({ storage });
const router = express.Router();

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.processLogin);
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', guestMiddleware, upload.single('image'), usersController.processRegister);
router.get('/profile', authMiddleware, usersController.profile);
router.get('/logout', authMiddleware, usersController.logout);
router.get('/', authMiddleware, usersController.list);
router.get('/:id/edit', authMiddleware, usersController.edit);
router.put('/:id', authMiddleware, upload.single('image'), usersController.update);
router.get('/:id', authMiddleware, usersController.detail);

module.exports = router;
