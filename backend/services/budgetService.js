const { User } = require('../models/user');

const budgetService = {
    createBudget: async (userID, amount, category) => {
        try {
            const user = await User.findById(userID);

            if (!user) {
                throw new Error('User not found');
            }

            user.budgets.push({
                amount,
                category,
            });

            await user.save();
        } catch (error) {
            console.error(error);
            throw new Error('Unable to create budget');
        }
    },

    getBudgets: async (userID) => {
        try {
            const user = await User.findById(userID);

            if (!user) {
                throw new Error('User not found');
            }

            return user.budgets;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to retrieve budgets');
        }
    },
    updateBudget: async (userID, budgetID, updatedAmount, updatedCategory) => {
        try {
            const user = await User.findById(userID);

            if (!user) {
                throw new Error('User not found');
            }

            const budgetToUpdate = user.budgets.id(budgetID);

            if (!budgetToUpdate) {
                throw new Error('Budget not found');
            }

            budgetToUpdate.amount = updatedAmount;
            budgetToUpdate.category = updatedCategory;

            await user.save();
            return budgetToUpdate;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to update budget');
        }
    },
};

module.exports = budgetService;
