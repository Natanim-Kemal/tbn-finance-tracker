const investmentService = require('../services/investmentService');

const investmentController = {
    invest: async (req, res) => {
        const { userID, investmentID } = req.params;
        const { amount } = req.body;

        try {
            const result = await investmentService.invest(userID, investmentID, amount);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error investing:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    getInvestmentDetails: async (req, res) => {
        const { userID, investmentID } = req.params;

        try {
            const result = await investmentService.getInvestmentDetails(userID, investmentID);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error getting investment details:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    updateInvestmentDetails: async (req, res) => {
        const { userID, investmentID } = req.params;
        const updatedData = req.body;

        try {
            const result = await investmentService.updateInvestmentDetails(userID, investmentID, updatedData);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error updating investment details:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    calculateReturn: async (req, res) => {
        const { userID, investmentID } = req.params;

        try {
            const result = await investmentService.calculateReturn(userID, investmentID);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error calculating return:', error);
            res.status(500).json({ success: false, message: 'Server Error' });
        }
    },

    deleteInvestment: async (userID, investmentID) => {
        try {
            const deletedInvestment = await Investment.findOneAndDelete({
                _id: investmentID,
                userID: userID,
            });

            if (!deletedInvestment) {
                return false; 
            }

            return true; 
        } catch (error) {
            console.error('Error deleting investment:', error);
            throw error;
        }
    },

};

module.exports = investmentController;
