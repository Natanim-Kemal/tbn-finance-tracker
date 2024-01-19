const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');


router.post('/send-notification',  notificationController.sendNotification)
    .post('/schedule-notification',  notificationController.scheduleNotification)
    .delete('/clear-notification/:id',  notificationController.clearNotification);

module.exports = router;
