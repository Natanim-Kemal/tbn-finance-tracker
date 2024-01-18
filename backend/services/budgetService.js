const Budget = require('../models/budget');

const budgetService = {
    createBudget: async (totalAmount, category, startDate, endDate) => {
        try {
            const newBudget = new Budget({totalAmount, category, startDate, endDate});
            await newBudget.save();
        } catch (error) {
            console.error(error);
            throw new Error('Unable to create budget');
        }
    },

    getBudgets: async (userID) => {
        try {
            if(!budget) {
                return {message: 'Budget not found.'}
            }
            return
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

            budgetToUpdate.totalAmount = updatedAmount;
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
