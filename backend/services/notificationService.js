const Reminder = require('../models/reminder');

const notificationService = {
    sendNotification: async (id, description) => {
        try {
            
        } catch (error) {
            console.error('Error sending notification:', error);
            throw error;
        }
    },

    scheduleNotification: async (id) => {
        try {
            const upcomingReminders = await Reminder.find({ id, dueDate: { $gte: new Date() } });
            const scheduledNotifications = upcomingReminders.map((reminder) => ({
                reminderID: reminder._id,
                id,
                message: 'Scheduled Notification: ' + reminder.description,
            }));

            await Notification.insertMany(scheduledNotifications);
            console.log(`Scheduled Notifications for User: ${id}`);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    clearNotification: async (id) => {
        try {
            await Notification.deleteMany({ id });
            console.log('Notifications cleared for User: ' + id);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
};

module.exports = notificationService;
