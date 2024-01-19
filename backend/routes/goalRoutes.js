const express = require('express');
const router = express.Router();
const {createGoal, getGoals, updateGoal, deleteGoal} = require('../controllers/goalController');


router.post('/create-goal', createGoal)
    .get('/get-goals', getGoals)
    .put('/update-goal', updateGoal)
    .delete('/delete-goal/:id', deleteGoal);

module.exports = router;