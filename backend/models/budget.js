
const mongoose = require('mongoose');
const User = require('./user');

const budgetSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
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
    },
});


const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
