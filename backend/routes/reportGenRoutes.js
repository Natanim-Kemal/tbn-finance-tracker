const express = require('express');
const router = express.Router();
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');
const reportGeneratorController = require('../controllers/reportGenController');

router.use(authenticateAndAuthorize);


router
    .get('/expense-report', reportGeneratorController.generateExpenseReport)
    .get('/income-report', reportGeneratorController.generateIncomeReport)
    .get('/category-report', reportGeneratorController.generateCategoryReport)

module.exports = router;
