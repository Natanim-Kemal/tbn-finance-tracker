const authController = require('../controllers/authController');

const router = require('express').Router();

router.post('/login', authController.login)
.post('/logout', authController.logout)


// routes for token refresh, logout, etc., as needed

module.exports = router;
