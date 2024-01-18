const mongoose = require('mongoose');
const User = require('./user');

const settingsSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
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
