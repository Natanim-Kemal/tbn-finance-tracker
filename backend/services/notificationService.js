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

};

module.exports = notificationService;
