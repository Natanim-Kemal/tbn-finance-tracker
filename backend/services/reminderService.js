const { Reminder } = require('../models/reminder');

const reminderService = {
    createReminder: async ({ req, description, dueDate, isRecurring }) => {
        try {
            const reminder = new Reminder({
                user: req.user,
                description,
                dueDate,
                isRecurring
            });
            await reminder.save();
            return reminder;
        } catch (error) {
            console.error('Error creating reminder:', error);
            return { message: 'Error' };
        }
    },

    getReminder: async (req) => {
        try {
            const reminders = await Reminder.find({ user: req.user.id });
            if (!reminders) {
                return { message: 'Reminder not found' };
            }
            return reminders;
        } catch (error) {
            console.error('Error getting reminders:', error);
            return { message: 'Error' };
        }
    },

    updateReminder: async (id, updatedData) => {
        try {
            const updatedReminder = await Reminder.findByIdAndUpdate(
                id,
                { $set: updatedData },
                { new: true }
            );

            if (!updatedReminder) {
                return { message: 'Reminder not found or unauthorized' };
            }

            return updatedReminder;
        } catch (error) {
            console.error('Error updating reminder:', error);
            return { message: 'Server Error' };
        }
    },

    deleteReminder: async (id) => {
        try {
            const result = await Reminder.findByIdAndDelete(id);

            if (!result) {
                return { message: 'Reminder not found' };
            }

            return { message: 'Reminder deleted successfully' };
        } catch (error) {
            console.error('Error deleting reminder:', error);
            return { message: 'Error' };
        }
    }
};

module.exports = reminderService;
