const Setting = require('../models/setting');

const settingsService = {
    createSetting: async ({ req, language, currency, notificationPreferences }) => {
        try {
            const setting = new Setting({
                user: req.user,
                language,
                currency,
                notificationPreferences
            });
            await setting.save();
            return setting;
        } catch (error) {
            console.error('Error adding setting:', error.message);
            throw new Error('Failed to add setting. Please try again.');
        }
    },

    getSettings: async (req, res) => {
        try {
            const settings = await Setting.find({ user: req.user.id });
            if (!settings) {
                throw new Error('Settings not found');
            }
            return settings;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to retrieve settings')
        }
    },

    updateSetting: async (id, data) => {
        try {
            const setting = await Setting.findByIdAndUpdate(id , data, { new: true });
            return setting;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to update setting');
        }
    },

    deleteSetting: async (id) => {
        try {
            const setting = await Setting.findByIdAndDelete(id);
            return setting;
        } catch (error) {
            console.error(error);
            throw new Error('Unable to delete setting');
        }
    }
};

module.exports = settingsService;
