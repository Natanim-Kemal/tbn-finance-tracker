const Account = require('../models/account');
const transaction = require('../models/transaction');

const accountService = {
    updateBalance: async (id, data) => {
        try {
            const account = await Account.findByIdAndUpdate(id, data, {
                new: true
            });
            const totalIncome = user.financialAccounts.reduce(
                (sum, account) => (account.isIncome ? sum + account.balance : sum),
                0
            );
            const totalExpenses = user.financialAccounts.reduce(
                (sum, account) => (!account.isIncome ? sum + account.balance : sum),
                0
            );

            user.balance = totalIncome - totalExpenses;
            await user.save();

            return true;
        } catch (error) {
            console.error('Error updating balance:', error);
            throw error;
        }
    },
};

module.exports = accountService;
