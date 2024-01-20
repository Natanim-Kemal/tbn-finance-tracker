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
            const goal = await goalsService.createGoal({
                req, goalName, targetAmount, deadline, goalDescription, currentAmount
            });
            res.status(200).json(goal);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    },

    getGoals: async (req, res) => {
        try {
            const goals = await goalsService.getGoals(req, res);
            res.status(200).json(goals);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },

    updateGoal: async (req, res) => {
        const { id } = req.params;
        const { goalName,
            targetAmount,
            deadline,
            goalDescription,
            currentAmount } = req.body;
        try {
            const goal = await goalsService.updateGoal(id, {
                goalName,
                targetAmount,
                deadline,
                goalDescription,
                currentAmount
            });
            res.status(200).json(goal);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Goal not updated' });
        }
    },

    deleteGoal: async (req, res) => {
        const { id } = req.params;
        try {
            const goal = await goalsService.deleteGoal(id);
    
            if (!goal) {
                res.status(404).json({ message: 'goal not found.' });
            } else {
                res.status(200).json(goal);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting goal' });
        }
    }
};

module.exports = (goalsController);
