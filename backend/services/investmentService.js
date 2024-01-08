const { Investment } = require('../models/investment');

const investmentService = {
    invest: async (userID, investmentID, amount) => {
        try {
            const investment = await Investment.findOne({ _id: investmentID, userID });

            if (!investment) {
                return { success: false, message: 'Investment not found or unauthorized' };
            }

            investment.amount += amount;
            await investment.save();

            return { success: true, message: 'Investment successful', investment };
        } catch (error) {
            console.error('Error investing:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    getInvestmentDetails: async (userID, investmentID) => {
        try {
            const investment = await Investment.findOne({ _id: investmentID, userID });

            if (!investment) {
                return { success: false, message: 'Investment not found or unauthorized' };
            }

            return { success: true, investment };
        } catch (error) {
            console.error('Error getting investment details:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    updateInvestmentDetails: async (userID, investmentID, updatedData) => {
        try {
            const updatedInvestment = await Investment.findOneAndUpdate(
                { _id: investmentID, userID },
                { $set: updatedData },
                { new: true }
            );

            if (!updatedInvestment) {
                return { success: false, message: 'Investment not found or unauthorized' };
            }

            return { success: true, message: 'Investment details updated successfully', updatedInvestment };
        } catch (error) {
            console.error('Error updating investment details:', error);
            return { success: false, message: 'Server Error' };
        }
    },

    calculateReturn: async (userID, investmentID) => {
        try {
            // Logic to calculate return goes here ... later 
            const calculatedReturn = 0; 

            return { success: true, calculatedReturn };
        } catch (error) {
            console.error('Error calculating return:', error);
            return { success: false, message: 'Server Error' };
        }
    },
};

module.exports = investmentService;
