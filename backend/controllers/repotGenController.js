const { User } = require('../models/user');

const reportGeneratorController = {
    generateExpenseReport: async (userID) => {
        try {
            const user = await User.findById(userID);
            const expenseTransactions = user.financialAccounts.filter((account) => !account.isIncome);

            const expenseReport = expenseTransactions.map((transaction) => ({
                name: transaction.name,
                amount: transaction.amount,
                date: transaction.createdAt,
            }));

            return expenseReport;
        } catch (error) {
            console.error('Error generating expense report:', error);
            throw error;
        }
    },

    generateIncomeReport: async (userID) => {
        try {
            const user = await User.findById(userID);
            const incomeTransactions = user.financialAccounts.filter((account) => account.isIncome);

            const incomeReport = incomeTransactions.map((transaction) => ({
                name: transaction.name,
                amount: transaction.amount,
                date: transaction.createdAt,
            }));

            return incomeReport;
        } catch (error) {
            console.error('Error generating income report:', error);
            throw error;
        }
    },

    generateCategoryReport: async (userID) => {
        try {
            const user = await User.findById(userID);

            const categoryReport = user.financialAccounts.reduce((report, transaction) => {
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

            return categoryReport;
        } catch (error) {
            console.error('Error generating category report:', error);
            throw error;
        }
    },
};

module.exports = reportGeneratorController;
