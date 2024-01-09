const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.use(authenticateAndAuthorize);

router.post('/create-goal', goalsController.createGoal)
    .get('/get-goals', goalsController.getGoals)
    .put('/update-goal/:goalID', goalsController.updateGoal)
    .delete('/delete-goal/:goalID', goalsController.deleteGoal);

module.exports = router;
