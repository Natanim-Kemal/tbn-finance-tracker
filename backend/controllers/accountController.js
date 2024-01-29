const accountService = require("../services/accountService");

const accountController = {
    updateBalance: async (req, res) => {
        const { id } = req.params;
        const { amount } = req.body;

        try {
            await accountService.updateBalance(id, { amount });
            res.status(200).json({ message: "Balance updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error" });
        }
    },
};

module.exports = accountController;
