const reportGeneratorService = require('../services/reportGeneratorService');

const reportGeneratorController = {
    generateExpenseReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const expenseReport = await reportGeneratorService.generateExpenseReport(userID);
            res.status(200).json(expenseReport);
        } catch (error) {
            console.error('Error generating expense report:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    generateIncomeReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const incomeReport = await reportGeneratorService.generateIncomeReport(userID);
            res.status(200).json(incomeReport);
        } catch (error) {
            console.error('Error generating income report:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },

    generateCategoryReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const categoryReport = await reportGeneratorService.generateCategoryReport(userID);
            res.status(200).json(categoryReport);
        } catch (error) {
            console.error('Error generating category report:', error);
            res.status(500).json({ error: 'Server Error' });
        }
    },
};

module.exports = reportGeneratorController;
