const Investment = require('../models/investment');

const investmentService = {
    invest: async ({ req, investmentName, interestRate, amountInvested, currentValue, investmentType }) => {
        try {
            const investment = new Investment({
                user: req.user,
                investmentName,
                interestRate,
                amountInvested,
                currentValue,
                investmentType
            });

            await investment.save();
            return investment;
        } catch (error) {
            console.error('Error investing:', error);
            return { message: 'Error' };
        }
    },

    getInvestmentDetails: async (req) => {
        try {
            const investment = await Investment.find({ user: req.user.id });

            if (!investment) {
                return { message: 'Investment not found' };
            }
            return investment;
        } catch (error) {
            console.error('Error getting investment details:', error);
            return { message: 'Error' };
        }
    },

    updateInvestmentDetails: async (id, updatedData) => {
        try {
            const updatedInvestment = await Investment.findByIdAndUpdate(id,
                { $set: updatedData },
                { new: true }
            );

            if (!updatedInvestment) {
                return { message: 'Investment not found' };
            }

            return updatedInvestment;
        } catch (error) {
            console.error('Error updating investment details:', error);
            return { message: 'Error' };
        } 
    },

    deleteInvestment: async (id) => {
        try {
            const deletedInvestment = await Investment.findByIdAndDelete(id);

            if (!deletedInvestment) {
                return { success: false, message: 'Investment not found' };
            }

            return deletedInvestment;
        } catch (error) {
            console.error('Error deleting investment:', error);
            throw new Error('Failed to delete investment');
        }
    }
};

module.exports = investmentService;
