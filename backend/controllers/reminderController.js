const reminderService = require("../services/reminderService");

const reminderController = {
    createReminder: async (req, res) => {
        const { description, dueDate, isRecurring } = req.body;

        try {
            const result = await reminderService.createReminder({
                req,
                description,
                dueDate,
                isRecurring,
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    },

    getReminder: async (req, res) => {
        try {
            const result = await reminderService.getReminder(req, res);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error" });
        }
    },

    updateReminder: async (req, res) => {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            const result = await reminderService.updateReminder(
                id,
                updatedData
            );
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error" });
        }
    },

    deleteReminder: async (req, res) => {
        const { id } = req.params;

        try {
            const result = await reminderService.deleteReminder(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error" });
        }
    },
};

module.exports = reminderController;
