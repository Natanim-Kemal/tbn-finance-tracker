const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const { requireAuth } = require('../middlewares/authMiddleware')

router.post('/create-budget', requireAuth, budgetController.createBudget)
    .get('/get-budget', budgetController.getBudgets)
    .put('/update-budget/:id', budgetController.updateBudget)
    .delete('/delete-budget/:id', budgetController.deleteBudget);

module.exports = router;
