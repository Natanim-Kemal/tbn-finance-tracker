
const mongoose = require('mongoose');
const User = require('./user');

const budgetSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: [true, 'Please enter starting date for your budget']
    },
    endDate: {
        type: Date,
        required: [true, 'Please enter ending date for your budget']
    },
    totalAmount: {
        type: Number,
        required: [true, 'Please enter the total amount']
    },
    purpose: {
        type: String,
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
}
);

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
