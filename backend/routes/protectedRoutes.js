const express = require('express');
const router = express.Router();
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.use(authenticateAndAuthorize);

router.get('/protected-resource', (req, res) => {
    res.json({ message: 'Protected resource accessed', user: req.user });
});

module.exports = router;
