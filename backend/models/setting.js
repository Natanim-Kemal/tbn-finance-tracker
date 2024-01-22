const mongoose = require('mongoose');
const User = require('./user');

const settingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    currency: {
        type: String,
        default: 'ETB'
    },
    type: {
        type: String,
        default: 'setting'
    },
    language: {
        type: String,
        default: 'Amharic'
    },
    notificationPreferences: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
