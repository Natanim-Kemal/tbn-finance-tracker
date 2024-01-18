const expenseService = require('../services/expenseService');

const expenseController = {
    addExpense: async (req, res) => {
        const { name, amount, category, description, date } = req.body;

        try {
            const result = await expenseService.addExpense({
                name,
                amount,
                category,
                description,
                date,
            });
            res.status(200).json(result);
        } catch (error) {
            console.error('Error adding expense:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    getExpenses: async (req, res) => {
        try {
            const expenses = await expenseService.getExpenses();
            res.status(200).json(expenses);
        } catch (error) {
            console.error('Error getting expenses:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    deleteExpense: async (req, res) => {
        const { id } = req.params;

        try {
            const result = await expenseService.deleteExpense(id);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error deleting expense:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    updateExpense: async (req, res) => {
        const { id } = req.params;
        const { updatedName, updatedAmount, updatedCategory } = req.body;

        try {
            const result = await expenseService.updateExpense(id, {
                updatedName,
                updatedAmount,
                updatedCategory,
            });
            res.status(200).json(result);
        } catch (error) {
            console.error('Error updating expense:', error);
            res.status(500).json({ error: 'Error' });
        }
    },
};

module.exports = expenseController;
