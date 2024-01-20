const Goal = require('../models/goal');

const goalsService = {
    createGoal: async ({ req, goalName, targetAmount, deadline, currentAmount, goalDescription }) => {
        try {
            const goal = new Goal({
                user: req.user,
                goalName,
                targetAmount,
                deadline,
                goalDescription,
                currentAmount,
            });
            await goal.save();
            return goal;
        } catch (error) {
            console.error('Error adding goal:', error.message);
            throw new Error('Failed to add goal. Please try again.');
        }
    },

    getGoals: async (req, res) => {
        try {
            const goals = await Goal.find({ user: req.user.id });
            if (!goals) {
                throw new Error('Goals not found');
            }
            return goals;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to retriee goals')
        }
    },

    updateGoal: async (id, data) => {
        try {
            const goal = await Goal.findOneAndUpdate({ _id: id }, data, { new: true });
            return goal;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to update goal');
        }
    },

    deleteGoal: async (id) => {
        try {
            const goal = await Goal.findByIdAndDelete(id);
            return goal;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to delete goal');
        }
    }
};

module.exports = goalsService;
