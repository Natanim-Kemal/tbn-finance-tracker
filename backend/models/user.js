const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator') 

const userSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Your password length should be minimum of 8 characters']
    },
    financialAccounts: {
        type: Array,
        default: [],
    },
    balance: {
        type: Number,
        default: 0,
    },
    isAdmin: { 
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.generateAuthToken = function () {
    jwtSecret = process.env.JWT_KEY;
    const token = jwt.sign({userID: this.userID}, process.env.JWT_KEY);
    return token;
}
userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model('User', userSchema);

module.exports =  User;
