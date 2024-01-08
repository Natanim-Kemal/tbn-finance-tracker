const reminderService = require('../services/reminderService');

const reminderController = {
    createReminder: async (req, res) => {
        const { userID } = req.params;
        const reminderData = req.body;

        try {
            const result = await reminderService.createReminder(userID, reminderData);
            res.status(result.success ? 201 : 500).json(result);
        } catch (error) {
            console.error('Error creating reminder:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    updateReminder: async (req, res) => {
        const { userID, reminderID } = req.params;
        const updatedData = req.body;

        try {
            const result = await reminderService.updateReminder(userID, reminderID, updatedData);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error updating reminder:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    deleteReminder: async (req, res) => {
        const { userID, reminderID } = req.params;

        try {
            const result = await reminderService.deleteReminder(userID, reminderID);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error deleting reminder:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    getReminder: async (req, res) => {
        const { userID } = req.params;

        try {
            const result = await reminderService.getReminder(userID);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error getting reminders:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },
};

module.exports = reminderController;
