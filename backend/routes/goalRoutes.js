const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.post('/create-goal', authenticateAndAuthorize, goalsController.createGoal);
router.get('/get-goals', authenticateAndAuthorize, goalsController.getGoals);
router.put('/update-goal/:goalID', authenticateAndAuthorize, goalsController.updateGoal);
router.delete('/delete-goal/:goalID', authenticateAndAuthorize, goalsController.deleteGoal);

module.exports = router;
