const Investment = require('../models/investment');
const investmentService = require('../services/investmentService');

const investmentController = {
    invest: async (req, res) => {
        const { investmentName,
            interestRate,
            amountInvested,
            currentValue,
            investmentType } = req.body;

        try {
            const result = await investmentService.invest({
                req,
                investmentName,
                interestRate,
                amountInvested,
                currentValue,
                investmentType
            });
            res.status(200).json(result);
        } catch (error) {
            console.error('Error investing:', error);
            res.status(500).json({ error: 'Error' });
        }
    },


    getInvestmentDetails: async (req, res) => {
        try {
            const result = await investmentService.getInvestmentDetails(req, res);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error getting investment details:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    updateInvestmentDetails: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const result = await investmentService.updateInvestmentDetails(id, updatedData);
            res.status(result.success ? 200 : 404).json(result);
        } catch (error) {
            console.error('Error updating investment details:', error);
            res.status(500).json({ error: 'Error' });
        }
    },

    calculateReturn: async (req, res) => {
        try {
            const { id } = req.params;
            const investment = await Investment.findById(id).exec();
            if (!investment) {
                return res.status(404).json({ error: 'Investment not found' });
            }
            const returnValue = investment.returnValue;
            res.status(200).json({ return:  returnValue });
        } catch (error) {
            console.error('Error calculating return:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },


    deleteInvestment: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await investmentService.deleteInvestment(id);

            if (!result) {
                res.status(404).json({ message: 'Investment not found.' });
            } else {
                res.status(200).json(result);
            }
        } catch (error) {
            console.error('Error deleting investment:', error);
            res.status(500).json({ error: 'Error' });
        }
    },
};

module.exports = investmentController;
