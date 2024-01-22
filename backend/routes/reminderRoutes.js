const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const { requireAuth } = require('../middlewares/authMiddleware')

router.post('/create-reminder', requireAuth, reminderController.createReminder)
    .get('/get-reminders', requireAuth, reminderController.getReminder)
    .put('/update-reminder/:id', requireAuth, reminderController.updateReminder)
    .delete('/delete-reminder/:id', requireAuth, reminderController.deleteReminder)

module.exports = router;
