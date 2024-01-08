const { User } = require('../models/user');
const { Account } = require('../models/account');

const userController = {
    createAccount: async (req, res) => {
        const userExists = await User.findone({email});
            if (userExists) {
                res.join('User Exists.');
            }
        try {
            const newUser = new User({firstName, lastName, email, password, username, financialAccounts});

            await newUser.save();
            return true;
        } catch (error) {
            console.error(error, "registration error!");
            return false;
        }
    },

    getUserId: async () => {
        const userId = getCurrentUserId();
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
            // Hash the new password !!!
            await User.findByIdAndUpdate(userID, { $set: { password: newPassword } });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    linkFinancialAccount: async (userID, financeInstituteId, accountId) => {
        try {
            // logic to link a financial account goes here ... later
            const newLink = new Link({ userID, financeInstituteId, accountId });
            await newLink.save();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    getFinancialReport: async (userID) => {
        try {
            // logic to generate and retrieve financial reports goes here later
            const financialReport = generateFinancialReport(userID);
            return financialReport;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
};

module.exports = userController;
