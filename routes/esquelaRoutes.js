const express = require('express');
const router = express.Router();
const esquelaController = require('../controllers/esquelaController')

router.post('/registrar', esquelaController.crearEsquela)


//METODOS GET
router.get('/estudiante/:idEstudiante', esquelaController.getEsquelaByEstudiante)
//MEOTODO PARA TRAER UNA ESQUELA DETALLADA 
router.get('/:id', esquelaController.getEsquelaById)
module.exports=router;

