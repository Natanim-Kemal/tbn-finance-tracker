const IncomeSchema = require("../models/income");

const incomeService = {
    addIncome: async ({ name, amount, category, description, date }) => {
        try {
            if (!name || !category || !description || !date) {
                throw new Error('All fields are required!');
            }
            if (amount <= 0 || typeof amount !== 'number') {
                throw new Error('Amount must be a positive number!');
            }

            const income = new IncomeSchema({
                name,
                amount,
                category,
                description,
                date
            });

            await income.save();
            return { message: 'Income Added' };
        } catch (error) {
            throw error;
        }
    },

    getIncomes: async () => {
        try {
            const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
            return incomes;
        } catch (error) {
            throw error;
        }
    },

    deleteIncome: async (incomeId) => {
        try {
            const deletedIncome = await IncomeSchema.findByIdAndDelete(incomeId);
            return { message: 'Income Deleted', deletedIncome };
        } catch (error) {
            throw error;
        }
    },
};

module.exports = incomeService;
