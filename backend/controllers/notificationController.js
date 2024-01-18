const notificationService = require('../services/notificationService');

const notificationController = {
    sendNotification: async (req, res) => {
        try {
            const result = await notificationService.sendNotification();
            res.status(200).json({ success: result });
        } catch (error) {
            console.error('Error sending notifications:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    scheduleNotification: async (req, res) => {
        try {
            const result = await notificationService.scheduleNotification();
            res.status(200).json({ success: result });
        } catch (error) {
            console.error('Error scheduling notifications:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    clearNotification: async (req, res) => {
        try {
            const result = await notificationService.clearNotification();
            res.status(200).json({ success: result });
        } catch (error) {
            console.error('Error clearing notifications:', error);
            res.status(500).json({ error: 'Error' });
        }
    },
};

module.exports = notificationController;
