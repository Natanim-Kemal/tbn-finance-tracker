const settingService = require('../services/settingService');

const settingController = {
    createSetting: async (req, res) => {
        try {
            const { language, currency, notificationPreferences
            } = req.body;
            const setting = await settingService.createSetting({
                req, language, currency, notificationPreferences
            });
            res.status(200).json(setting);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    },

    getSettings: async (req, res) => {
        try {
            const settings = await settingService.getSettings(req, res);
            res.status(200).json(settings);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },

    updateSetting: async (req, res) => {
        const { id } = req.params;
        const { data } = req.body;
        try {
            const setting = await settingService.updateSetting(id, {
                data
            });
            if (!setting) {
                res.status(404).json({ message: 'setting not found.' });
            } else {
                res.status(200).json(setting);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'setting not updated' });
        }
    },

    deleteSetting: async (req, res) => {
        const { id } = req.params;
        try {
            const setting = await settingService.deleteSetting(id);

            if (!setting) {
                res.status(404).json({ message: 'setting not found.' });
            } else {
                res.status(200).json(setting);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting setting' });
        }
    }
};

module.exports = settingController;
