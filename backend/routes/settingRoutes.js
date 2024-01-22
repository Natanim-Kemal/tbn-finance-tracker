const express = require('express');
const router = express.Router();
const {createSetting, getSettings, updateSetting, deleteSetting} = require('../controllers/settingController');
const { requireAuth } = require('../middlewares/authMiddleware');

router.post('/create-setting', requireAuth, createSetting)
    .get('/get-settings', requireAuth, getSettings)
    .put('/update-setting/:id', requireAuth, updateSetting)
    .delete('/delete-setting/:id', requireAuth, deleteSetting);

module.exports = router;