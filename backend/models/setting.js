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
        required: true,
    },
    type: {
        type: String,
        default: 'setting'
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
