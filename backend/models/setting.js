const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    currency: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    notificationPreferences: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = { Settings };
