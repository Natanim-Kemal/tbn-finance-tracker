const express = require('express');
const router = express.Router();
const {createGoal, getGoals, updateGoal, deleteGoal} = require('../controllers/goalController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.post('/create-goal', requireAuth, createGoal)
    .get('/get-goals', requireAuth, getGoals)
    .put('/update-goal/:id', requireAuth, updateGoal)
    .delete('/delete-goal/:id', requireAuth, deleteGoal);

module.exports = router;