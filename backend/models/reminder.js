const mongoose = require('mongoose');
const User = require('./user');

const reminderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        default: 'reminder'
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
