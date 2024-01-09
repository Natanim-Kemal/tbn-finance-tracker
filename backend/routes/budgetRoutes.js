const express = require('express');
const router = express.Router();
const authenticateAndAuthorize = require('../middlewares/authMiddleware');
const budgetController = require('../controllers/budgetController');

router.use(authenticateAndAuthorize);

router.post('/create-budget', budgetController.createBudget);
router.get('/get-budget/:userID', budgetController.getBudget);
router.put('/update-budget/:userID/:budgetID', budgetController.updateBudget);
router.delete('/delete-budget/:userID/:budgetID', budgetController.deleteBudget);

module.exports = router;
