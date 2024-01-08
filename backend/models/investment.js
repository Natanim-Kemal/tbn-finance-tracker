const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
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
