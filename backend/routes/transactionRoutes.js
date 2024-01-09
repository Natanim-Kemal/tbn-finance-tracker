const router = require('express').Router();
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/incomeController');



router.post('/addIncome', addIncome)
    .get('/getIncomes', getIncomes)
    .delete('/deleteIncome/:id', deleteIncome)
    .post('/addExpense', addExpense)
    .get('/getExpenses', getExpenses)
    .delete('/deleteExpense/:id', deleteExpense)

module.exports = router
