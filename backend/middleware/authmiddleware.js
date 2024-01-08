const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const requireAuth = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};


module.exports = { requireAuth, };
