const Budget = require('../models/budget');

const budgetService = {
    createBudget: async (req, totalAmount, category, startDate, endDate) => {
        try {
            const budget = new Budget({ user: req.user, totalAmount, category, startDate, endDate });
            await budget.save();
            return budget;
        } catch (error) { 
            console.error(error);
            throw new Error('Unable to create budget'); 
        }
    },

    getBudgets: async (req, res) => {
        try {
            const budgets = await Budget.find({user: req.user.id}).select('-password');
            return budgets;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to retrieve budgets');
        }
    },
    updateBudget: async (id, data) => {
        try {
            const budget = await Budget.findOneAndUpdate({_id: id}, data, {
                new: true
            });
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
