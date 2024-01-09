const accountService = require('../services/accountService');

const accountController = {
    updateBalance: async (req, res) => {
        try {
            const { userID } = req.params;
            await accountService.updateBalance(userID);
            res.status(200).json({ message: 'Balance Updated' });
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },

    addIncome: async (req, res) => {
        try {
            const { userID } = req.params;
            const { amount, name, stateOfStay } = req.body;
            await accountService.addIncome(userID, amount, name, stateOfStay);
            res.status(200).json({ message: 'Income Added' });
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },

    getIncome: async (req, res) => {
        try {
            const { userID } = req.params;
            const incomeTransactions = await accountService.getIncome(userID);
            res.status(200).json(incomeTransactions);
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },

    getTransactions: async (req, res) => {
        try {
            const { userID } = req.params;
            const allTransactions = await accountService.getTransactions(userID);
            res.status(200).json(allTransactions);
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },

    addExpense: async (req, res) => {
        try {
            const { userID } = req.params;
            const { amount, name } = req.body;
            await accountService.addExpense(userID, amount, name);
            res.status(200).json({ message: 'Expense Added' });
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },

    getExpense: async (req, res) => {
        try {
            const { userID } = req.params;
            const expenseTransactions = await accountService.getExpense(userID);
            res.status(200).json(expenseTransactions);
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = accountController;
