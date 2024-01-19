const accountService = require('../services/accountService');

const accountController = {
    updateBalance: async (req, res) => {
        const { id } = req.params;

        try {
            await accountService.updateBalance(id);
            res.status(200).json({ message: 'Balance updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
        }
    },
};

module.exports = accountController;