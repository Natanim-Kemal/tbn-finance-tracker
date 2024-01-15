const express = require('express');
const router = express.Router();
const reportGeneratorController = require('../controllers/reportGenController');

router
    .get('/expense-report', reportGeneratorController.generateExpenseReport)
    .get('/income-report', reportGeneratorController.generateIncomeReport)
    .get('/category-report', reportGeneratorController.generateCategoryReport)

module.exports = router;
