const incomeService = require('../services/incomeService');

const incomeController = {
    addIncome: async (req, res) => {
        try {
            const { name, amount, category, description, date } = req.body;
            const result = await incomeService.addIncome({ name, amount, category, description, date });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    },

    getIncomes: async (req, res) => {
        try {
            const incomes = await incomeService.getIncomes();
            res.status(200).json(incomes);
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    },

    deleteIncome: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await incomeService.deleteIncome(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    }
};

module.exports = (incomeController);