const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.post('/create-budget', requireAuth, budgetController.createBudget)
    .get('/get-budgets', requireAuth, budgetController.getBudgets)
    .put('/update-budget/:id', requireAuth, budgetController.updateBudget)
    .delete('/delete-budget/:id', requireAuth, budgetController.deleteBudget);

module.exports = router;
