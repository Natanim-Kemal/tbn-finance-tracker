const express = require('express');
const reminderController = require('../controllers/reminderController');
const { authenticateAndAuthorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create-reminder', authenticateAndAuthorize, reminderController.createReminder)
    .put('/update-reminder/:id', authenticateAndAuthorize, reminderController.updateReminder)
    .delete('/delete-reminder/:id', authenticateAndAuthorize, reminderController.deleteReminder)
    .get('/get-reminders', authenticateAndAuthorize, reminderController.getReminder);

module.exports = router;
