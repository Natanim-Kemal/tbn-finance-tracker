const reportGeneratorService = require("../services/reportGenService");

const reportGeneratorController = {
    generateExpenseReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const expenseReport =
                await reportGeneratorService.generateExpenseReport(userID);
            res.status(200).json(expenseReport);
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    },

    generateIncomeReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const incomeReport =
                await reportGeneratorService.generateIncomeReport(userID);
            res.status(200).json(incomeReport);
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    },

    generateCategoryReport: async (req, res) => {
        const { userID } = req.params;

        try {
            const categoryReport =
                await reportGeneratorService.generateCategoryReport(userID);
            res.status(200).json(categoryReport);
        } catch (error) {
            res.status(500).json({ error: "Error" });
        }
    },
};

module.exports = reportGeneratorController;
