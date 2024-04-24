const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController')

router.post('/register',estudianteController.crearEstudiante );

//METODOS GET 
//OBTENER TODOS LOS ESTUDIANTES
router.get('/all',estudianteController.getEstudiantes)
//OBTENER ESTUDIANTE POR CURSO
router.get('/curso/:id', estudianteController.getEstudianteByCurso);
//OBTENER ESTDIANTE POR PADRE DE FAMILIA 
router.get('/representante/:idpadre', estudianteController.getEstudianteByIdRepresentante);
module.exports = router;