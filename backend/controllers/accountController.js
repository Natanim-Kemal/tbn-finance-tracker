const { User } = require('../models/user'); 
const { Transaction } = require('../models/transaction');

const accountController = {
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
            console.error('Error updating balance:', error);
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

            await accountController.updateBalance(userID);
        } catch (error) {
            console.error('Error adding income:', error);
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
            console.error('Error getting income transactions:', error);
            throw error;
        }
    },

    getTransactions: async (userID) => {
        try {
            const user = await User.findById(userID);

            return user.financialAccounts;
        } catch (error) {
            console.error('Error getting all transactions:', error);
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

            await accountController.updateBalance(userID);
        } catch (error) {
            console.error('Error adding expense:', error);
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
            console.error('Error getting expense transactions:', error);
            throw error;
        }
    },
};

module.exports = accountController;
