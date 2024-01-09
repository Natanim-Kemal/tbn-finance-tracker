const { User } = require('../models/user');

const goalsService = {
    createGoal: async ({ userID, goalName, targetAmount, targetDate }) => {
        const user = await User.findById(userID);

        if (!user) {
            throw new Error('User not found');
        }

        user.goals.push({
            name: goalName,
            targetAmount,
            targetDate,
        });

        await user.save();
    },

    getGoals: async (user) => {
        if (!user) {
            throw new Error('User not found');
        }

        return user.goals;
    },

    updateGoal: async (user, goalID, { updatedName, updatedAmount, updatedDate }) => {
        if (!user) {
            throw new Error('User not found');
        }

        const goalToUpdate = user.goals.id(goalID);

        if (!goalToUpdate) {
            throw new Error('Goal not found');
        }

        goalToUpdate.name = updatedName;
        goalToUpdate.targetAmount = updatedAmount;
        goalToUpdate.targetDate = updatedDate;

        await user.save();
    },

    deleteGoal: async (user, goalID) => {
        if (!user) {
            throw new Error('User not found');
        }

        const goalToDelete = user.goals.id(goalID);

        if (!goalToDelete) {
            throw new Error('Goal not found');
        }

        goalToDelete.remove();
        await user.save();
    },
};

module.exports = goalsService;
