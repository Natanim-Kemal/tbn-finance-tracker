const { User } = require('../models/user');

const accountService = {
    updateBalance: async (userID) => {
        try {
            const user = await User.findById(userID);
            const totalIncome = user.financialAccounts.reduce(
                (sum, account) => (account.isIncome ? sum + account.amount : sum),
                0
            );
            const totalExpenses = user.financialAccounts.reduce(
                (sum, account) => (!account.isIncome ? sum + account.amount : sum),
                0
            );
            user.balance = totalIncome - totalExpenses;
            await user.save();
        } catch (error) {
            throw error;
        }
    },

    addIncome: async (userID, amount, name, stateOfStay) => {
        try {
            const user = await User.findById(userID);
            user.financialAccounts.push({
                amount,
                name,
                stateOfStay,
                isIncome: true,
            });
            await user.save();
            await accountService.updateBalance(userID);
        } catch (error) {
            throw error;
        }
    },

    getIncome: async (userID) => {
        try {
            const user = await User.findById(userID);
            const incomeTransactions = user.financialAccounts.filter(
                (account) => account.isIncome
            );
            return incomeTransactions;
        } catch (error) {
            throw error;
        }
    },

    getTransactions: async (userID) => {
        try {
            const user = await User.findById(userID);
            return user.financialAccounts;
        } catch (error) {
            throw error;
        }
    },

    addExpense: async (userID, amount, name) => {
        try {
            const user = await User.findById(userID);
            user.financialAccounts.push({
                amount,
                name,
                isIncome: false,
            });
            await user.save();
            await accountService.updateBalance(userID);
        } catch (error) {
            throw error;
        }
    },

    getExpense: async (userID) => {
        try {
            const user = await User.findById(userID);
            const expenseTransactions = user.financialAccounts.filter(
                (account) => !account.isIncome
            );
            return expenseTransactions;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = accountService;
