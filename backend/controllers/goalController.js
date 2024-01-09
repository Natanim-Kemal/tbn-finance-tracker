const { User } = require('../models/user');
const goalsService = require('../services/goalsService');

const goalsController = {
    createGoal: async (req, res) => {
        try {
            await goalsService.createGoal(req.body);
            res.status(201).json({ message: 'Goal created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
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
            await goalsService.updateGoal(req.user, req.params.goalID, req.body);
            res.status(200).json({ message: 'Goal updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    deleteGoal: async (req, res) => {
        try {
            await goalsService.deleteGoal(req.user, req.params.goalID);
            res.status(200).json({ message: 'Goal deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = goalsController;
