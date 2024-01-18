const mongoose = require("mongoose");
const User = require('./user');

const goalSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    goalName: {
        type: String,
        required: [true, 'Please enter name for you goal']
    },
    deadline: {
        type: Date, 
        required: [true, 'Please enter ending date for your goal']
    },
    goalDescription: { 
        type: String,
    },
    targetAmount: {
        type: Number,
        required: [true, 'Please enter target amount you want to hit'] 
    },
    currentAmount: {
        type: Number,
        default: 0,
        required: [true, 'Please enter your current amount of asset']
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started',
    }
}, { timestamps: true });

const Goal = mongoose.model('Goal', goalSchema);
module.exports =  Goal;
