const ExpenseSchema = require('../models/expense');

const expenseService = {
    addExpense: async ({ name, amount, category, description, date }) => {
        try {
            if (!name || !category || !description || !date) {
                throw new Error('All fields are required!');
            }
            if (amount <= 0 || typeof amount !== 'number') {
                throw new Error('Amount must be a positive number!');
            }

            const expense = new ExpenseSchema({
                name,
                amount,
                category,
                description,
                date,
            });

            await expense.save();
            return { message: 'Expense Added' };
        } catch (error) {
            throw error;
        }
    },

    getExpenses: async () => {
        try {
            const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
            return expenses;
        } catch (error) {
            throw error;
        }
    },

    deleteExpense: async (id) => {
        try {
            const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);

            if (!deletedExpense) {
                throw new Error('Expense not found');
            }

            return { message: 'Expense Deleted' };
        } catch (error) {
            throw error;
        }
    },

    updateExpense: async (id, { updatedName, updatedAmount, updatedCategory }) => {
        try {
            const updatedExpense = await ExpenseSchema.findByIdAndUpdate(
                id,
                {
                    $set: {
                        name: updatedName,
                        amount: updatedAmount,
                        category: updatedCategory,
                    },
                },
                { new: true }
            );

            if (!updatedExpense) {
                throw new Error('Expense not found');
            }

            return { message: 'Expense Updated', expense: updatedExpense };
        } catch (error) {
            throw error;
        }
    },
};

module.exports = expenseService;
