const router = require('express').Router();
const { addIncome } = require('../controllers/income')

router.post('/add-income', addIncome)

module.exports = router  