const express = require('express');
const router = express.Router();

const asignacionDocenteMateriaController = require('../controllers/asignacionDocenteMateriaController')
//METODOS GET
//METODO PARA TRAER LAS MATERIA POR DOCENTE
router.get('/docente/:id', asignacionDocenteMateriaController.getAsignacionByDocente);

//METODO PARA TRAER TODA LA INFORMACION DE UNA ASIGNACION DE DOCENTE POR ID 
router.get('/:id', asignacionDocenteMateriaController.getAsignacionDocenteById);

module.exports=router