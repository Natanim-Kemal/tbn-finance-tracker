// services/reportGeneratorService.js
const { User } = require('../models/user');

const reportGeneratorService = {
    generateExpenseReport: async (userID) => {
        try {
            const user = await User.findById(userID);
            const expenseTransactions = user.financialAccounts.filter((account) => !account.isIncome);

            return expenseTransactions.map((transaction) => ({
                name: transaction.name,
                amount: transaction.amount,
                date: transaction.createdAt,
            }));
        } catch (error) {
            console.error('Error generating expense report:', error);
            throw error;
        }
    },

    generateIncomeReport: async (userID) => {
        try {
            const user = await User.findById(userID);
            const incomeTransactions = user.financialAccounts.filter((account) => account.isIncome);

            return incomeTransactions.map((transaction) => ({
                name: transaction.name,
                amount: transaction.amount,
                date: transaction.createdAt,
            }));
        } catch (error) {
            console.error('Error generating income report:', error);
            throw error;
        }
    },

    generateCategoryReport: async (userID) => {
        try {
            const user = await User.findById(userID);

            return user.financialAccounts.reduce((report, transaction) => {
                const category = transaction.category || 'Uncategorized';

                if (!report[category]) {
                    report[category] = [];
                }

                report[category].push({
                    name: transaction.name,
                    amount: transaction.amount,
                    date: transaction.createdAt,
                });

                return report;
            }, {});
        } catch (error) {
            console.error('Error generating category report:', error);
            throw error;
        }
    },
};

module.exports = reportGeneratorService;
