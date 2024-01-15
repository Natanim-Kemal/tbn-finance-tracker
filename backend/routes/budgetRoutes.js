const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');


router.post('/create-budget', budgetController.createBudget)
    .get('/get-budget/:userID', budgetController.getBudget)
    .put('/update-budget/:userID/:budgetID', budgetController.updateBudget)
    .delete('/delete-budget/:userID/:budgetID', budgetController.deleteBudget);

module.exports = router;
