const User = require("../models/user");
const jwt = require('jsonwebtoken');

const maxAge = 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: maxAge
    });
};

const authController = {
    signup: async (req, res) => {
        const { firstName, lastName, email, password, username, financialAccounts } = req.body;

        try {
            const userExists = await User.findOne({ email });
            if (userExists) {
                return { success: false, message: 'Invalid Credentials' };
            }
            const user = await User.create({ firstName, lastName, email, password, username, financialAccounts });
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ message: "Operation successful!" });
        }
        catch (err) {
            res.status(400).json({ errors });
        }

    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.login(email, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json({ message: token });
        }
        catch (err) {
            res.status(400).json({ errors });
            res.status(404).json({ errors: "Somethig went wrong" });
        }

    },

    logout: (req, res) => {
        res.cookie('jwt', '', { maxAge: 1 });
        res.redirect('/');
    }

};

module.exports = authController;