
const express = require('express');
const asignaturaController = require('../controllers/asignaturaController');
const router = express.Router();


router.post('/register',asignaturaController.crearAsignatura );
router.patch('/patch',asignaturaController.editarAsignatura );
//metodos get
//metodo para traer todas las asignatura existentes 
router.get('/all',asignaturaController.getAsignaturas)
router.get('/seccion',asignaturaController.getAsignaturasBySeccion)
router.get('/jornada/:jor_id',asignaturaController.getAsignaturasByJornada)
router.get('/nivel/:nivel_id',asignaturaController.getAsignaturasByNivel)
//METODO PARA EL ELIMINAR UN CURSO
router.delete('/delete/:id', asignaturaController.deleteAsignatura);


module.exports = router;