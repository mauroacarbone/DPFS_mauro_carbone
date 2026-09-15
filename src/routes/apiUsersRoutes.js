const express = require('express');
const apiUsersController = require('../controllers/api/usersController');

const router = express.Router();

router.get('/', apiUsersController.list);
router.get('/:id', apiUsersController.detail);

module.exports = router;
