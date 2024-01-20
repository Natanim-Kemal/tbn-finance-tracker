const router = require('express').Router();
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/incomeController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.post('/addIncome', requireAuth, addIncome)
    .get('/getIncomes', requireAuth, getIncomes)
    .delete('/deleteIncome/:id', requireAuth, deleteIncome)
    .post('/addExpense', requireAuth, addExpense)
    .get('/getExpenses', requireAuth, getExpenses)
    .delete('/deleteExpense/:id', requireAuth, deleteExpense)

module.exports = router
