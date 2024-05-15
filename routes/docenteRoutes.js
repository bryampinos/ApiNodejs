const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteController')

router.post('/asignacionMateria', docenteController.asignacionMateria);

//METODOS GET
//OBTENER INFORMACION DEL DOCENTE
router.get('/:id',docenteController.findDocenteById)

module.exports=router;