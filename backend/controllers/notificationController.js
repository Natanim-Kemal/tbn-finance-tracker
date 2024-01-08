
const { Reminder } = require('../models/reminder');

const notificationController = {
    sendNotification: async (userID) => {
        try {
            const reminders = await Reminder.find({ userID });
            reminders.forEach(async (reminder) => {
                const notification = new Notification({
                    reminderID: reminder._id,
                    userID,
                    message: 'Reminder: ' + reminder.description,
                });
                await notification.save();
                console.log(`Notification sent for Reminder: ${reminder._id}`);
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    scheduleNotification: async (userID) => {
        try {
            // Your logic to schedule notifications for the user with the given userID
            // For example, find upcoming reminders for the user and schedule notifications
            const upcomingReminders = await Reminder.find({ userID, dueDate: { $gte: new Date() } });
            upcomingReminders.forEach(async (reminder) => {
                // Logic to schedule notifications based on reminder data
                // You might use external services or platforms for scheduling notifications
                const notification = new Notification({
                    reminderID: reminder._id,
                    userID,
                    message: 'Scheduled Notification: ' + reminder.description,
                });
                await notification.save();
                console.log(`Notification scheduled for Reminder: ${reminder._id}`);
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    clearNotification: async (userID) => {
        try {
            // Your logic to clear notifications for the user with the given userID
            // For example, delete all notifications related to the user
            await Notification.deleteMany({ userID });
            console.log('Notifications cleared for User: ' + userID);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
};

module.exports = notificationController;
