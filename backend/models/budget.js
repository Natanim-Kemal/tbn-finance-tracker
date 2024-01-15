
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    budgetID: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
    },
    startDate: {
        type: mongoose.Schema.Types.Date,
        required: true,
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
}, { timestamps: true });


const Budget = mongoose.model('Budget', budgetSchema);

module.exports =  Budget;
