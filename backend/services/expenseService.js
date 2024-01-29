const ExpenseSchema = require("../models/expense");

const expenseService = {
    addExpense: async ({ req, name, amount, category, description, date }) => {
        try {
            if (!name || !category || !description || !date) {
                throw new Error("All fields are required!");
            }
            if (amount <= 0 || typeof amount !== "number") {
                throw new Error("Amount must be a positive number!");
            }

            const expense = new ExpenseSchema({
                user: req.user,
                name,
                amount,
                category,
                description,
                date,
            });

            await expense.save();
            return expense;
        } catch (error) {
            throw new Error("Failed to add expense. Please try again.");
        }
    },

    getExpenses: async (req) => {
        try {
            const expenses = await ExpenseSchema.find({ user: req.user.id });
            if (!expenses.length) {
                return "There is no expense for this user.";
            }
            return expenses;
        } catch (error) {
            throw error;
        }
    },

    deleteExpense: async (id) => {
        try {
            const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);

            if (!deletedExpense) {
                throw new Error("Expense not found");
            }

            return deletedExpense;
        } catch (error) {
            throw new Error("Unable to delete expense");
        }
    },

    updateExpense: async (
        id,
        { updatedName, updatedAmount, updatedCategory }
    ) => {
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
                throw new Error("Expense not found");
            }

            return updatedExpense;
        } catch (error) {
            console.error(error.message);
            throw new Error("Failed to update expense. Please try again.");
        }
    },
};

module.exports = expenseService;
