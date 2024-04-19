const express = require('express');
const router = express.Router();
const esquelaController = require('../controllers/esquelaController')

router.post('/registar', esquelaController.crearEsquela)

module.exports=router;

