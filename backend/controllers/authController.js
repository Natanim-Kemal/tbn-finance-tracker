
const express = require('express');
const app = express();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
}));

const authController = {
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
            console.error('Error authenticating user:', error);
            throw error;
        }
    },

    authorizeUser: async (userID) => {
        try {
            const user = await User.findById(userID);

            if (!user) {
                throw new Error('User not found');
            }

            // role checks goes in here. !!!

            return true;
        } catch (error) {
            console.error('Error authorizing user:', error);
            throw error;
        }
    },

    encryptPassword: async (password) => {
        try {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            return hashedPassword;
        } catch (error) {
            console.error('Error encrypting password:', error);
            throw error;
        }
    },

    validatePassword: async (password, hashedPassword) => {
        try {
            const isPasswordValid = await bcrypt.compare(password, hashedPassword);
            return isPasswordValid;
        } catch (error) {
            console.error('Error validating password:', error);
            throw error;
        }
    },

    logout: async (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error logging out:', err);
                throw err;
            }
            res.redirect('/login');
        });
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const result = await authController.authenticateUser(email, password);
            res.status(200).json(result);
        } catch (error) {
            console.error('Authentication error:', error);
            res.status(401).json({ error: 'Authentication failed' });
        }
    }
};

module.exports = authController;
