    const IncomeSchema = require("../models/income");

    const incomeService = {
        addIncome: async ({ req, name, amount, category, description, date }) => {
            try {
                if (amount <= 0) {
                    throw new Error('Amount must be a positive number!');
                }
                const income = new IncomeSchema({
                    user: req.user,
                    name,
                    amount,
                    category,
                    description, 
                    date
                });
                await income.save();
                return income;
            } catch (error) {
                console.error(error.message);
                throw new Error('Failed to add income. Please try again.');
            }
            },

        getIncomes: async (req, res) => {
            try {
                const incomes = await IncomeSchema.find({user: req.user.id});
                if(!(incomes.length)) {
                    return ('There is none income for this user.')
                }
                console.log(!incomes)
                return incomes;
            } catch (error) {
                throw error;
            }
        },

        deleteIncome: async (id) => {
            try {
                const deletedIncome = await IncomeSchema.findByIdAndDelete(id);
                return deletedIncome;
            } catch (error) {
                throw new Error('Unable to delete Income');
            }
        },
    };

    module.exports = incomeService;
