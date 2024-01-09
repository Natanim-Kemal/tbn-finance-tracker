const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.post('/send-notification', authenticateAndAuthorize, notificationController.sendNotification)
    .post('/schedule-notification', authenticateAndAuthorize, notificationController.scheduleNotification)
    .delete('/clear-notification', authenticateAndAuthorize, notificationController.clearNotification);

module.exports = router;
