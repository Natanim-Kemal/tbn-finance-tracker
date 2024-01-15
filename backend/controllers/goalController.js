const goalsService = require('../services/goalService');
const User = require('../models/user');

const goalsController = {
    createGoal: async (req, res) => {
        try {
            const { goalName,
                targetAmount,
                deadline,
                goalDescription,
                currentAmount
            } = req.body;
            const result = await goalsService.createGoal({
                goalName,
                targetAmount,
                deadline,
                goalDescription, 
                currentAmount
            });
            res.status(200).json({ message: 'Goal created successfully', result });
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    },

    getGoals: async (req, res) => {
        try {
            const goals = await goalsService.getGoals(req.user);
            res.status(200).json(goals);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    updateGoal: async (req, res) => {
        try {
            const { goalName,
                targetAmount,
                deadline,
                goalDescription,
                currentAmount } = req.body;
            const result = await goalsService.updateGoal(req.user, req.params.goalID, { goalName,
                targetAmount,
                deadline,
                goalDescription,
                currentAmount});
            res.status(200).json({ message: 'Goal updated successfully', result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Goal not updated' });
        }
    },

    deleteGoal: async (req, res) => {
        try {
            const result = await goalsService.deleteGoal(req.user, req.params.goalID);
            res.status(200).json({ message: 'Goal deleted successfully', result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Goal not deleted, try again' });
        }
    },
};

module.exports = (goalsController);
