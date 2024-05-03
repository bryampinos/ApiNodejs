const express = require('express');
const router = express.Router();

const asignacionDocenteMateriaController = require('../controllers/asignacionDocenteMateriaController')
//METODOS GET
//METODO PARA TRAER LAS MATERIA POR DOCENTE
router.get('/docente/:id', asignacionDocenteMateriaController.getAsignacionByDocente);

module.exports=router