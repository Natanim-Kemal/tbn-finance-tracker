const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please enter username']
    },
    balance: {
        type: Number,
        required: [true, 'Please enter your current Balance']
    },
    currency: {
        type: String,
        default: "ETB"
    },
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

module.exports = { Account };
