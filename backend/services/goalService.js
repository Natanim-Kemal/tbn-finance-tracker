const Goal = require('../models/goal');
const User = require('../models/user');

const goalsService = {
    createGoal: async ({ goalName, targetAmount, deadline, currentAmount, goalDescription }) => {
        try {
            const goal = new Goal({
                goalName,
                targetAmount,
                deadline,
                goalDescription,
                currentAmount,
            });

            await goal.save();
            return { message: 'Goal Added'}

        } catch (error) {console.error('Error adding goal:', error.message);
        throw new Error('Failed to add goal. Please try again.');
        } 
    },

    getGoals: async (userID) => {
        const user = await User.findById(userID).populate('goals');

        if (!user) {
            throw new Error('User not found');
        }

        return user.goals;
    },

    updateGoal: async (userID, goalID, { updatedName, updatedAmount, updatedDate }) => {
        const user = await User.findById(userID);

        if (!user) {
            throw new Error('User not found');
        }

        const goalToUpdate = await Goal.findById(goalID);

        if (!goalToUpdate) {
            throw new Error('Goal not found');
        }

        goalToUpdate.goalName = updatedName;
        goalToUpdate.targetAmount = updatedAmount;
        goalToUpdate.deadline = updatedDate;

        await goalToUpdate.save();

        return goalToUpdate;
    },

    deleteGoal: async (userID, goalID) => {
        const user = await User.findById(userID);

        if (!user) {
            throw new Error('User not found');
        }

        const goalToDelete = await Goal.findById(goalID);

        if (!goalToDelete) {
            throw new Error('Goal not found');
        }

        await goalToDelete.remove();
        await user.save();

        return goalToDelete;
    },
};

module.exports = goalsService;
