const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

router.use(authenticateAndAuthorize);

router.post('/send-notification',  notificationController.sendNotification)
    .post('/schedule-notification',  notificationController.scheduleNotification)
    .delete('/clear-notification',  notificationController.clearNotification);

module.exports = router;
