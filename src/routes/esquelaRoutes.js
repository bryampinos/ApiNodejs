const express = require('express');
const router = express.Router();
const esquelaController = require('../controllers/esquelaController')

router.post('/registrar', esquelaController.crearEsquela)
router.get('/all', esquelaController.getAll)

//METODOS GET
router.get('/estudiante/:idEstudiante', esquelaController.getEsquelaByEstudiante)
//MEOTODO PARA TRAER UNA ESQUELA DETALLADA 
router.get('/:id', esquelaController.getEsquelaById)
//METODO PARA TRAER LAS ESQUELAS POR ASIGNACOIN DOCENTE ASIGNAUTRA
router.get('/docenteAsignacion/:idasignaciondocentemateria', esquelaController.getEsquelaByAsignacion)
//METODO PARA OBETENER EL PDF POR ESTUDIANTE
router.get('/reportepdf/estudiante/:id', esquelaController.getReporteByEstudiante)
//METODO PARA OBETNER EL PDF POR LA FEHCHA INDICADA
router.get('/reportepdf/fecha/:fecha', esquelaController.getReporteByFecha)
router.get('/reporte/generate-pdf', esquelaController.getEsquelasPDF);
router.get('/reportepdf/curso/:curso', esquelaController.getReporteByCurso);
router.get('/reportepdf/docente/:docente', esquelaController.getReporteByDocente);
router.get('/reportepdf/AsignacionDocente/:asignacion', esquelaController.getReporteByAsignacion)
module.exports=router;

