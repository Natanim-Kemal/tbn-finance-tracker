const Budget = require('../models/budget');
const User = require('../models/user');

const budgetService = {
    createBudget: async (user, totalAmount, category, startDate, endDate) => {
        try {
            const budget = new Budget({ user, totalAmount, category, startDate, endDate });
            await budget.save();
        } catch (error) {
            console.error(error);
            throw new Error('Unable to create budget');
        }
    },

    getBudgets: async () => {
        try {
            const budgets = await Budget.find();
            return budgets;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to retrieve budgets');
        }
    },
    updateBudget: async (id, data) => {
        try {
            const budget = await Budget.findByIdAndUpdate(id, data, {
                new: true
            }).populate(User);
            return budget;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to update budget');
        }
    },
    deleteBudget: async (id) => {
        try {
            const deletedBudget = await Budget.findByIdAndDelete(id);
            return deletedBudget;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to delete budget');
        }
    }
};

module.exports = budgetService;
