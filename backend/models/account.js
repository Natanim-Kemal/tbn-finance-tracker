const mongoose = require('mongoose');
const User = require('./user');

const accountSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: User
    },
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

module.exports = Account;