const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');


router.post('/create-reminder',  reminderController.createReminder)
    .put('/update-reminder/:id', reminderController.updateReminder)
    .delete('/delete-reminder/:id', reminderController.deleteReminder)
    .get('/get-reminders', reminderController.getReminder);

module.exports = router;
