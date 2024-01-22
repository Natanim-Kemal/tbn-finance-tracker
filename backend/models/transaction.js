const mongoose = require('mongoose');
const User = require('../models/user')

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        default: 'transaction'
    },
    category: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    isExpense: {
        type: Boolean,
        required: true,
    },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

