const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    goalName: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    goalDescription: {
        type: String,
        required: true,
    },
    targetAmount: {
        type: Number,
        required: true,
    },
    currentAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = { Goal };
