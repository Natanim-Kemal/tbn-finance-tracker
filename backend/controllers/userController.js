const userService = require('../services/userService');

const userController = {
    createAccount: async (req, res) => {
        const { firstName, lastName, email, password, username, financialAccounts } = req.body;

        try {
            const result = await userService.createAccount(firstName, lastName, email, password, username, financialAccounts);
            res.status(result.success ? 200 : 400).json({ message: result.message });
        } catch (error) {
            console.error('Error creating account:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
    getAccountDetails: async (req, res) => {
        const { userID } = req.params;

        try {
            const accountDetails = await userService.getAccountDetails(userID);
            res.status(accountDetails ? 200 : 404).json(accountDetails || { message: 'User not found' });
        } catch (error) {
            console.error('Error getting account details:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    deleteAccount: async (req, res) => {
        const { userID } = req.params;

        try {
            const result = await userService.deleteAccount(userID);
            res.status(result.success ? 200 : 500).json({ message: result.message });
        } catch (error) {
            console.error('Error deleting account:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    updateProfile: async (req, res) => {
        const { userID } = req.params;
        const updatedData = req.body;

        try {
            const result = await userService.updateProfile(userID, updatedData);
            res.status(result.success ? 200 : 500).json({ message: result.message });
        } catch (error) {
            console.error('Error updating profile:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    changePassword: async (req, res) => {
        const { userID } = req.params;
        const { newPassword } = req.body;

        try {
            const result = await userService.changePassword(userID, newPassword);
            res.status(result.success ? 200 : 500).json({ message: result.message });
        } catch (error) {
            console.error('Error changing password:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    linkFinancialAccount: async (req, res) => {
        const { userID, financeInstituteId, accountId } = req.body;

        try {
            const result = await userService.linkFinancialAccount(userID, financeInstituteId, accountId);
            res.status(result.success ? 200 : 500).json({ message: result.message });
        } catch (error) {
            console.error('Error linking financial account:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    getFinancialReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const financialReport = await userService.getFinancialReport(userID);
            res.status(financialReport ? 200 : 500).json(financialReport || { message: 'Server Error' });
        } catch (error) {
            console.error('Error getting financial report:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = userController;
