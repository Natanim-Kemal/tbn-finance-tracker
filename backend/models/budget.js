
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    budgetID: {
        type: Number,
        required: true,
        unique: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    },
});

// Methods
budgetSchema.statics.createBudget = async function (userID, startDate, endDate, totalAmount, purpose) {
    try {
        const budgetID = generateUniqueBudgetID(); 
        await this.create({
            budgetID,
            startDate,
            endDate,
            totalAmount,
            purpose,
        });
        return true;
    } catch (error) {
        throw error;
    }
};

budgetSchema.statics.updateBudget = async function (budgetID, userID, startDate, endDate, totalAmount, purpose) {
    try {
        const budget = await this.findOne({ budgetID });
        if (!budget) {
            return false;
        }
        // Check if the user has permission to update this budget (you can implement this logic based on your application requirements)

        // Update the budget fields
        budget.startDate = startDate;
        budget.endDate = endDate;
        budget.totalAmount = totalAmount;
        budget.purpose = purpose;
        await budget.save();
        return true;
    } catch (error) {
        throw error;
    }
};

budgetSchema.statics.getRemainingBudget = async function (userID, budgetID) {
    try {
        const budget = await this.findOne({ budgetID });
        if (!budget) {
            return null; 
        }
        // Check if the user has permission to access this budget here 

        const expenses = await this.calculateExpenses(userID, budgetID); // You need to implement this function
        const remainingBudget = budget.totalAmount - expenses;
        return {
            totalAmount: budget.totalAmount,
            remainingBudget,
        };
    } catch (error) {
        throw error;
    }
};


const Budget = mongoose.model('Budget', budgetSchema);

module.exports = { Budget };
