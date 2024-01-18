const mongoose = require('mongoose');
const User = require('./user');

const reminderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    isRecurring: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = { Reminder };
