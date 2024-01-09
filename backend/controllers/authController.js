const authService = require('../services/authService');
const { User } = require('../models/user');

const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const result = await authService.authenticateUser(email, password);
            res.status(200).json(result);
        } catch (error) {
            console.error('Authentication error:', error);
            res.status(401).json({ error: 'Authentication failed' });
        }
    },
    logout: async (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error logging out:', err);
                res.status(500).json({ error: 'Server Error' });
            } else {
                res.redirect('/login');
            }
        });
    },
    authorizeUser: async (req, res) => {
        const { userID } = req.params;

        try {
            const isAuthorized = await authService.authorizeUser(userID);

            if (isAuthorized) {
                res.status(200).json({ message: 'User is authorized' });
            } else {
                res.status(403).json({ error: 'User is not authorized' });
            }
        } catch (error) {
            console.error('Authorization error:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    encryptPassword: async (req, res) => {
        const { password } = req.body;

        try {
            const hashedPassword = await authService.encryptPassword(password);
            res.status(200).json({ hashedPassword });
        } catch (error) {
            console.error('Encryption error:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    validatePassword: async (req, res) => {
        const { password, hashedPassword } = req.body;

        try {
            const isValid = await authService.validatePassword(password, hashedPassword);
            res.status(200).json({ isValid });
        } catch (error) {
            console.error('Validation error:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    }
};

module.exports = authController;
