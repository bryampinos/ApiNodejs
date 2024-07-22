
const express = require('express');
const atrasoController = require('../controllers/atrasoController')
const router = express.Router();

//METODO POST PARA REGISTRAR LAS ESQUELAS 
router.post('/register',atrasoController.crearAtraso );
//METODO GET PARA TRAER TODAS LAS ATRASOS POR INSPECTOR
router.get('/all/:id', atrasoController.findByInspector)
//METODO GET PARA TRAER TODAS LOS ATRASOS DE UN ESTUDIANTE 
router.get('/estudiante/:id', atrasoController.atrsoByEstudiante)
//metodo para generar los reportes por curso
router.get('/reporte/curso/:id', atrasoController.generarReportesByCurso)
//metodo para generar los reportes por estudiante 
router.get('/reporte/estudiante/:id', atrasoController.generarReportesByEstudiante)
//metodo para generar reportes por fecha
router.get('/reporte/fecha/:id', atrasoController.generarReportesByFecha)


module.exports = router;