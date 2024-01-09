const express = require('express');
const investmentController = require('../controllers/investmentController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/invest', authenticateAndAuthorize, investmentController.invest)
    .get('/get-investment-details/:id', authenticateAndAuthorize, investmentController.getInvestmentDetails)
    .put('/update-investment-details/:id', authenticateAndAuthorize, investmentController.updateInvestmentDetails)
    .delete('/delete-investment/:id', authenticateAndAuthorize, investmentController.deleteInvestment)
    .get('/calculate-return/:id', authenticateAndAuthorize, investmentController.calculateReturn);

module.exports = router;
