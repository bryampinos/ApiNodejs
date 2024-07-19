
const express = require('express');
const asignaturaController = require('../controllers/asignaturaController');
const router = express.Router();


router.post('/register',asignaturaController.crearAsignatura );

//metodos get
//metodo para traer todas las asignatura existentes 
router.get('/all',asignaturaController.getAsignaturas)
//METODO PARA EL ELIMINAR UN CURSO
router.delete('/delete/:id', asignaturaController.deleteAsignatura);


module.exports = router;