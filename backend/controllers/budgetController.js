const budgetService = require('../services/budgetService');

const budgetController = {
    createBudget: async (req, res) => {
        const { totalAmount, category, startDate, endDate } = req.body;
        console.log(req.headers);
        try {
            await budgetService.createBudget( totalAmount, category, startDate, endDate );
            res.status(201    ).json({ message: 'Budget created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },

    getBudget: async (req, res) => {
        const { budgetID } = req.params;

        try {
            const budgets = await budgetService.getBudgets(budgetID);
            res.status(200).json(budgets); 
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },

    deleteBudget: async (req, res) => {
        const { userID, budgetID } = req.params;

        try {
            await budgetService.deleteBudget(userID, budgetID);
            res.status(200).json({ message: 'Budget deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },

    updateBudget: async (req, res) => {
        const { userID, budgetID } = req.params;
        const { updatedAmount, updatedCategory } = req.body;

        try {
            const updatedBudget = await budgetService.updateBudget(userID, budgetID, updatedAmount, updatedCategory);
            res.status(200).json({ message: 'Budget updated successfully', budget: updatedBudget });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },
};

module.exports = budgetController;
