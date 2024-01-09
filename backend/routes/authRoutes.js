const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.use(authenticateAndAuthorize);

router.post('/register', authenticateAndAuthorize, userController.createAccount)
    .post('/login', authenticateAndAuthorize, authController.login)
    .get('/admin-dashboard', authenticateAndAuthorize, (req, res) => {
        res.status(200).json({ message: 'Welcome to the admin dashboard!' });
    });

module.exports = router;
