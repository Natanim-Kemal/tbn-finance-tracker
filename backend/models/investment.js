const mongoose = require('mongoose');
const User = require('./user');

const investmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    investmentName: {
        type: String,
        required: true,
    },
    interestRate: {
        type: Number,
        required: true,
    },
    amountInvested: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        default: 'investment'
    },
    currentValue: {
        type: Number,
        required: true,
    },
    investmentType: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Investment = mongoose.model('Investment', investmentSchema);

module.exports = { Investment };
