const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');
const { requireAuth } = require('../middlewares/authMiddleware');


router.post('/invest', requireAuth, investmentController.invest)
    .get('/get-investment-details', requireAuth, investmentController.getInvestmentDetails)
    .put('/update-investment/:id', requireAuth, investmentController.updateInvestmentDetails)
    .get('/calculate-return/:id', requireAuth, investmentController.calculateReturn)
    .delete('/delete-investment/:id', requireAuth, investmentController.deleteInvestment);

module.exports = router;
