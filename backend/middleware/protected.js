const express = require('express');
const { requireAuth } = require('/authMiddleware');

const router = express.Router();

router.get('/protected-resource', requireAuth, (req, res) => {
    res.json({ message: 'Protected resource accessed', user: req.user });
});

module.exports = router;
