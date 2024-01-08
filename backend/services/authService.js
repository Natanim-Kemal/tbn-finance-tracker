// services/authService.js
const { User } = require('../models/user');
const bcrypt = require('bcrypt');

const authService = {
    authenticateUser: async (email, password) => {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('User not found');
            }

            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }

            const token = user.generateAuthToken();
            return { token };
        } catch (error) {
            throw error;
        }
    },

    authorizeUser: async (userID) => {
        try {
            const user = await User.findById(userID);

            if (!user) {
                throw new Error('User not found');
            }

            // role checks go here. !!!

            return true;
        } catch (error) {
            throw error;
        }
    },

    encryptPassword: async (password) => {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            throw error;
        }
    },

    validatePassword: async (password, hashedPassword) => {
        try {
            const isPasswordValid = await bcrypt.compare(password, hashedPassword);
            return isPasswordValid;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = authService;
