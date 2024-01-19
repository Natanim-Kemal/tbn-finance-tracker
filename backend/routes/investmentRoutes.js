const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');
const { requireAuth } = require('../middlewares/authMiddleware');


router.post('/invest', requireAuth, investmentController.invest)
    .get('/get-investment-details/:id', requireAuth, investmentController.getInvestmentDetails)
    .put('/update-investment-details/:id', requireAuth, investmentController.updateInvestmentDetails)
    .delete('/delete-investment/:id', requireAuth, investmentController.deleteInvestment)
    .get('/calculate-return/:id', requireAuth, investmentController.calculateReturn);

module.exports = router;
