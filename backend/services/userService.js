const User = require("../models/user");
const bcrypt = require("bcrypt");
const Account = require("../models/account");
const { generateFinancialReport } = require("../services/reportGenService");

const userService = {
    createAccount: async (
        firstName,
        lastName,
        email,
        password,
        username,
        financialAccounts
    ) => {
        try {
            const userExists = await User.findOne({ email }).maxTimeMS(20000);

            if (!userExists) {
                console.log("doesn't exist");
            }

            if (userExists) {
                return {
                    success: false,
                    message: "User with this email already exists.",
                };
            }

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                username,
                financialAccounts,
            });
            await newUser.save();
            return { success: true, message: "User created successfully." };
        } catch (error) {
            console.log(error);
            return { success: false, message: "Error creating user" };
        }
    },
    getAccountDetails: async (userID) => {
        try {
            const user = await User.findById(userID);
            if (!user) {
                return null;
            }
            const accountDetails = await user.financialAccounts;
            return accountDetails;
        } catch (error) {
            console.error("Error getting account details:", error);
            return null;
        }
    },

    deleteAccount: async (userID) => {
        try {
            await User.findByIdAndDelete(userID);
            await Account.deleteMany({ userID });
            return { success: true, message: "Account deleted successfully." };
        } catch (error) {
            console.error("Error deleting account:", error);
            return { success: false, message: "Server Error" };
        }
    },

    updateProfile: async (userID, updatedData) => {
        try {
            await User.findByIdAndUpdate(userID, { $set: updatedData });
            return { success: true, message: "Profile updated successfully." };
        } catch (error) {
            console.error("Error updating profile:", error);
            return { success: false, message: "Error" };
        }
    },

    changePassword: async (userID, newPassword) => {
        try {
            const salt = await bcrypt.genSalt(10);
            newPassword = await bcrypt.hash(newPassword, salt);
            await User.findByIdAndUpdate(userID, {
                $set: { password: newPassword },
            });
            return { success: true, message: "Password changed successfully." };
        } catch (error) {
            console.error("Error changing password:", error);
            return { success: false, message: "Error" };
        }
    },

    linkFinancialAccount: async (userID) => {
        try {
            // logic to link a financial account goes here ... later
            const newLink = new Link({ userID });
            return {
                success: true,
                message: "Financial account linked successfully.",
            };
        } catch (error) {
            console.error("Error linking financial account:", error);
            return { success: false, message: "Error" };
        }
    },

    getFinancialReport: async (userID) => {
        try {
            const financialReport = generateFinancialReport(userID);
            return financialReport;
        } catch (error) {
            console.error("Error getting financial report:", error);
            return { success: false, message: "Error" };
        }
    },
};

module.exports = userService;
