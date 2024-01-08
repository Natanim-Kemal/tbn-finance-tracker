
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
            const upcomingReminders = await Reminder.find({ userID, dueDate: { $gte: new Date() } });
            upcomingReminders.forEach(async (reminder) => {
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
