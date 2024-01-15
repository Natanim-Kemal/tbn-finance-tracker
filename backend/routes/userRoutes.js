const express = require('express');
const router = express.Router();
const accountController = require('../controllers/userController');

router.post('/create-account', accountController.createAccount)
    .get('/get-account-details/:userID', accountController.getAccountDetails)
    .delete('/delete-account/:userID', accountController.deleteAccount)
    .put('/update-profile/:userID', accountController.updateProfile)
    .put('/change-password/:userID', accountController.changePassword)
    .post('/link-financial-account/:userID', accountController.linkFinancialAccount)
    .get('/financial-report/:userID', accountController.getFinancialReport);

module.exports = router;
