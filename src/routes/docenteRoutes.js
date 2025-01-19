const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteController')

router.post('/asignacionMateria', docenteController.asignacionMateria);
router.post('/registrar',docenteController.registrar)
router.post('/asignar-jornada-nivel',docenteController.asignarNivel)
//METODOS GET
//OBTENER INFORMACION DEL DOCENTE
router.get('/:id',docenteController.findDocenteById)
// OBTENER TODOS LOS DOCENTES 
router.get('/user/all', docenteController.getDocentes)
//MEOTODOS DE LA CONFIGURACION
router.patch('/patch', docenteController.updateDocente)
router.delete('/delete/:id', docenteController.deleteDocente);

//RUTAS PARA CARGAR TODOS LOS DOCENTES CON SUS DATOS
router.get('/maestro/all',docenteController.allDocentes)
module.exports=router;