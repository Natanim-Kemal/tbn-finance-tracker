const express = require('express');
const accountController = require('../controllers/accountController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.put('/update-balance/:id', requireAuth, accountController.updateBalance);

module.exports = router;
