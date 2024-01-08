const { addExpense, getExpense, deleteExpense } = require('../controllers/expenseController');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/incomeController');

const router = require('express').Router();


router.post('/addIncome', addIncome)
    .get('/getIncomes', getIncomes)
    .delete('/deleteIncome/:id', deleteIncome)
    .post('/addExpense', addExpense)
    .get('/getExpenses', getExpense)
    .delete('/deleteExpense/:id', deleteExpense)

module.exports = router