const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController')

router.post('/register',estudianteController.crearEstudiante );

//METODOS GET 
//OBTENER TODOS LOS ESTUDIANTES
router.get('/all',estudianteController.getEstudiantes)
//OBTENER LA INFORMACION DEL ESTUDIANTES 
router.get('/:id',estudianteController.getEstudianteById)
//OBTENER ESTUDIANTE POR CURSO
router.get('/curso/:id', estudianteController.getEstudianteByCurso);
//OBTENER ESTDIANTE POR PADRE DE FAMILIA 
router.get('/representante/:idpadre', estudianteController.getEstudianteByIdRepresentante);
//GENERAR EL CODIGO QR
router.get('/generarqr/:id', estudianteController.generarQR)
// OBTENER ESTUDIANTE POR NUMERO DE  CEDULA
router.get('/cedula/:cedula', estudianteController.getEstudianteByCedula)
//MEOTODOS DEL CRUD
router.patch('/patch', estudianteController.updateEstudiante)
router.delete('/delete/:id', estudianteController.deleteEstudiante);
module.exports = router;