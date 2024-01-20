const budgetService = require('../services/budgetService');

const budgetController = {
    createBudget: async (req, res) => {
        try { 
            const{ totalAmount, category, startDate, endDate } = req.body;
            const budget = await budgetService.createBudget( req, totalAmount, category, startDate, endDate );
            res.status(201).json(budget);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },
    
    getBudgets: async (req, res) => {
        try {
            const budgets = await budgetService.getBudgets(req, res);
            res.status(200).json(budgets);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },

    updateBudget: async (req, res) => {
        const {id} = req.params;
        const { totalAmount, category, startDate, endDate } = req.body;
        try {
            const updatedBudget = await budgetService.updateBudget(id, {
                totalAmount,
                category,
                startDate,
                endDate
            });

            res.status(200).json(updatedBudget);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating budget' });
        }
    },
    deleteBudget: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedBudget = await budgetService.deleteBudget(id);
    
            if (!deletedBudget) {
                res.status(404).json({ message: 'Budget not found.' });
            } else {
                res.status(200).json(deletedBudget);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting budget' });
        }
    }
};

module.exports = budgetController;
