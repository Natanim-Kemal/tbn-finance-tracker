const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    reminderID: {
        type: Number,
        required: true,
        unique: true,
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
