const express = require('express');
const router = express.Router();


router.get('/protected-resource', (req, res) => {
    res.json({ message: 'Protected resource accessed', user: req.user });
});

module.exports = router;
