const notificationService = require('../services/notificationService');

const notificationController = {
    sendNotification: async (req, res) => {
        const { userID } = req.params;

        try {
            const result = await notificationService.sendNotification(userID);
            res.status(200).json({ success: result });
        } catch (error) {
            console.error('Error sending notifications:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    scheduleNotification: async (req, res) => {
        const { userID } = req.params;

        try {
            const result = await notificationService.scheduleNotification(userID);
            res.status(200).json({ success: result });
        } catch (error) {
            console.error('Error scheduling notifications:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    clearNotification: async (req, res) => {
        const { userID } = req.params;

        try {
            const result = await notificationService.clearNotification(userID);
            res.status(200).json({ success: result });
        } catch (error) {
            console.error('Error clearing notifications:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },
};

module.exports = notificationController;
