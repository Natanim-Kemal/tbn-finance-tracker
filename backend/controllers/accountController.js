const accountService = require('../services/accountService');

const accountController = {
    updateBalance: async (req, res) => {
        const { userID } = req.params;

        try {
            await accountService.updateBalance(userID);
            res.status(200).json({ message: 'Balance updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    },
};

module.exports = accountController;
