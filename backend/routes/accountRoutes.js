const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

router.put('/update-balance/:userID', accountController.updateBalance);

module.exports = router;
