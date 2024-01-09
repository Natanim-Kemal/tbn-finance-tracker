const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.use(authenticateAndAuthorize);

router.post('/invest', investmentController.invest)
    .get('/get-investment-details/:id', investmentController.getInvestmentDetails)
    .put('/update-investment-details/:id', investmentController.updateInvestmentDetails)
    .delete('/delete-investment/:id', investmentController.deleteInvestment)
    .get('/calculate-return/:id', investmentController.calculateReturn);

module.exports = router;
