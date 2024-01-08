const { User } = require('../models/user');
const { Account } = require('../models/account');

const userController = {
    createAccount: async (firstName, lastName, email, password, username, financialAccounts) => {
        try {
            const newUser = new User({
                firstName,
                lastName,
                email,
                password, // Make sure to hash the password before saving
                username,
                financialAccounts,
            });

            await newUser.save();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    getUserId: async () => {
        // You might implement logic to retrieve the user ID based on the current user's session or authentication
        // Example: const userId = getCurrentUserId();
        return userId;
    },

    getAccountDetails: async (userID) => {
        try {
            const user = await User.findById(userID);
            if (!user) {
                return null;
            }

            const accountDetails = await Account.find({ userID });
            return accountDetails;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    deleteAccount: async (userID) => {
        try {
            await User.findByIdAndDelete(userID);
            await Account.deleteMany({ userID });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    updateProfile: async (userID, updatedData) => {
        try {
            await User.findByIdAndUpdate(userID, { $set: updatedData });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    changePassword: async (userID, newPassword) => {
        try {
            // Update user password (make sure to hash the new password before saving)
            await User.findByIdAndUpdate(userID, { $set: { password: newPassword } });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    linkFinancialAccount: async (userID, financeInstituteId, accountId) => {
        try {
            // Implement logic to link a financial account to the user
            // Example: const newLink = new Link({ userID, financeInstituteId, accountId });
            // await newLink.save();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    getFinancialReport: async (userID) => {
        try {
            // Implement logic to generate and retrieve financial reports for the user
            // Example: const financialReport = generateFinancialReport(userID);
            // return financialReport;
            return null; 
        } catch (error) {
            console.error(error);
            return null;
        }
    },
};

module.exports = userController;
