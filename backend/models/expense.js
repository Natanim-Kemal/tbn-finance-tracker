const mongoose = require('mongoose');
const User = require('./user');

const ExpenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "expense"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
    isRecurring: {
        type: Boolean,
        default: false,
    },
    recurrenceInterval: {
        type: String, 
        enum: ['daily', 'weekly', 'monthly'];
    },
}, { timestamps: true })

const Expense = mongoose.model('Expense', ExpenseSchema)
module.exports = Expense; 