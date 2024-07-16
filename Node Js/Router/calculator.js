const express = require('express');
const CalculatorController = require('../controller/calculator');
const router = express.Router();

router.post('/add',CalculatorController.add);
router.post('/subtract',CalculatorController.subtract);
router.post('/multiply',CalculatorController.multiply);
router.post('/divide',CalculatorController.divide);

module.exports = router;