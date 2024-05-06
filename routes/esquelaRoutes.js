const express = require('express');
const router = express.Router();
const esquelaController = require('../controllers/esquelaController')

router.post('/registar', esquelaController.crearEsquela)


//METODOS GET
router.get('/estudiante/:idEstudiante', esquelaController.getEsquelaByEstudiante)
module.exports=router;

