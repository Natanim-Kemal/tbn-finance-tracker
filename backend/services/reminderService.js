const { Reminder } = require('../models/reminder');

const reminderService = {
    createReminder: async (userID, reminderData) => {
        try {
            const reminder = new Reminder({ userID, ...reminderData });
            await reminder.save();
            return { success: true, reminder };
        } catch (error) {
            console.error('Error creating reminder:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    updateReminder: async (userID, reminderID, updatedData) => {
        try {
            const updatedReminder = await Reminder.findOneAndUpdate(
                { _id: reminderID, userID },
                { $set: updatedData },
                { new: true }
            );

            if (!updatedReminder) {
                return { success: false, message: 'Reminder not found or unauthorized' };
            }

            return { success: true, message: 'Reminder updated successfully', updatedReminder };
        } catch (error) {
            console.error('Error updating reminder:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    deleteReminder: async (userID, reminderID) => {
        try {
            const result = await Reminder.findOneAndDelete({ _id: reminderID, userID });

            if (!result) {
                return { success: false, message: 'Reminder not found or unauthorized' };
            }

            return { success: true, message: 'Reminder deleted successfully' };
        } catch (error) {
            console.error('Error deleting reminder:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    getReminder: async (userID) => {
        try {
            const reminders = await Reminder.find({ userID });
            return { success: true, reminders };
        } catch (error) {
            console.error('Error getting reminders:', error);
            return { success: false, message: 'Server Error' };
        }
    },
};

module.exports = reminderService;
