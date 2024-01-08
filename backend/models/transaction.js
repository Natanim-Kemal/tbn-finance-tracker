const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
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
