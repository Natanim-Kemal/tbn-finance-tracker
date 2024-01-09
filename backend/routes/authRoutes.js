const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require("../controllers/userController")
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.post('/register', authenticateAndAuthorize, userController.createAccount);

router.post('/login', authenticateAndAuthorize, authController.login);

module.exports = router;
