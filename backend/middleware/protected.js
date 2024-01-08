const express = require('express');
const { requireAuth } = require('/authMiddleware');

const router = express.Router();

router.get('/protected-resource', requireAuth, (req, res) => {
    // Access user information using req.user
    res.json({ message: 'Protected resource accessed', user: req.user });
});

module.exports = router;
