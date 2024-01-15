const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

function authenticateAndAuthorize(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }

        try {
            const user = await User.findById(decoded.userID);

            if (!user) {
                return res.status(403).json({ message: 'Forbidden: User not found' });
            }

            req.user = user;

            if (user.isAdmin) {
                next();
            } else {
                return res.status(403).json({ message: 'Forbidden: Access denied for non-admin users' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    });
}

module.exports = { authenticateAndAuthorize };
