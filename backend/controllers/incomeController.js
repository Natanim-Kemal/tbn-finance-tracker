const incomeService = require('../services/incomeService');

const incomeController = {
    addIncome: async (req, res) => {
        try {
            const { name, amount, category, description, date } = req.body;
            const income = await incomeService.addIncome({ req, name, amount, category, description, date });
            res.status(200).json(income);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    },

    getIncomes: async (req, res) => {
        try {
            const incomes = await incomeService.getIncomes(req, res);
            res.status(200).json(incomes);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    },

    deleteIncome: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await incomeService.deleteIncome(id);
            if (!result) {
                res.status(404).json({ message: 'Income not found.' });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    }
};

module.exports = (incomeController);