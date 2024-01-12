const { User } = require('../models/user');
const { Account } = require('../models/account');

const userService = {
    createAccount: async (firstName, lastName, email, password, username, financialAccounts) => {
        try {
            const userExists = await User.findOne({ email });

            if (userExists) {
                return { success: false, message: 'User already exists.' };
            }

            const newUser = new User({ firstName, lastName, email, password, username, financialAccounts });

            await newUser.save();
            return { success: true, message: 'User created successfully.' };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    getUserId: () => {
        const userId = getCurrentUserId(); // Assuming getCurrentUserId is defined elsewhere
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
            console.error('Error getting account details:', error);
            return null;
        }
    },

    deleteAccount: async (userID) => {
        try {
            await User.findByIdAndDelete(userID);
            await Account.deleteMany({ userID });
            return { success: true, message: 'Account deleted successfully.' };
        } catch (error) {
            console.error('Error deleting account:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    updateProfile: async (userID, updatedData) => {
        try {
            await User.findByIdAndUpdate(userID, { $set: updatedData });
            return { success: true, message: 'Profile updated successfully.' };
        } catch (error) {
            console.error('Error updating profile:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    changePassword: async (userID, newPassword) => {
        try {
            // Hash the new password !!!
            await User.findByIdAndUpdate(userID, { $set: { password: newPassword } });
            return { success: true, message: 'Password changed successfully.' };
        } catch (error) {
            console.error('Error changing password:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    linkFinancialAccount: async (userID, financeInstituteId, accountId) => {
        try {
            // logic to link a financial account goes here ... later
            const newLink = new Link({ userID, financeInstituteId, accountId });
            await newLink.save();
            return { success: true, message: 'Financial account linked successfully.' };
        } catch (error) {
            console.error('Error linking financial account:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    getFinancialReport: async (userID) => {
        try {
            // logic to generate and retrieve financial reports goes here later
            const financialReport = generateFinancialReport(userID); // Assuming generateFinancialReport is defined elsewhere
            return financialReport;
        } catch (error) {
            console.error('Error getting financial report:', error);
            return { success: false, message: 'Server Error' };
        }
    },
};

module.exports = userService;

