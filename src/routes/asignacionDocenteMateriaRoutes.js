const express = require('express');
const router = express.Router();

const asignacionDocenteMateriaController = require('../controllers/asignacionDocenteMateriaController')
//METODOS GET
//METODO PARA TRAER LAS MATERIA POR DOCENTE
router.get('/docente/:id', asignacionDocenteMateriaController.getAsignacionByDocente);

//METODO PARA TRAER TODA LA INFORMACION DE UNA ASIGNACION DE DOCENTE POR ID 
router.get('/:id', asignacionDocenteMateriaController.getAsignacionDocenteById);
router.patch('/patch', asignacionDocenteMateriaController.editarAsignacion);
router.delete('/delete/:id', asignacionDocenteMateriaController.deleteAsignacion);
module.exports=router