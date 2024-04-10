const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteController')

router.post('/asignacionMateria', docenteController.asignacionMateria);

module.exports=router;