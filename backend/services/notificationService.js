const Reminder = require('../models/reminder');

const notificationService = {
    sendNotification: async (userID, description) => {
        try {
            const newReminder = await Reminder.create({
                userID: userID,
                description: description,
                date: new Date(),
                isRecurring: false,
            });

            return newReminder;
        } catch (error) {
            console.error('Error sending notification:', error);
            throw error;
        }
    },

    scheduleNotification: async (userID) => {
        try {
            const upcomingReminders = await Reminder.find({ userID, dueDate: { $gte: new Date() } });
            const scheduledNotifications = upcomingReminders.map((reminder) => ({
                reminderID: reminder._id,
                userID,
                message: 'Scheduled Notification: ' + reminder.description,
            }));

            await Notification.insertMany(scheduledNotifications);
            console.log(`Scheduled Notifications for User: ${userID}`);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    clearNotification: async (userID) => {
        try {
            await Notification.deleteMany({ userID });
            console.log('Notifications cleared for User: ' + userID);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
};

module.exports = notificationService;
