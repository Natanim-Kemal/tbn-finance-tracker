const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = { Account };
