const express = require('express');
const router = express.Router();
const docenteController = require('../controllers/docenteController')

router.post('/asignacionMateria', docenteController.asignacionMateria);

//METODOS GET
//OBTENER INFORMACION DEL DOCENTE
router.get('/:id',docenteController.findDocenteById)
// OBTENER TODOS LOS DOCENTES 
router.get('/user/all', docenteController.getDocentes)
//MEOTODOS DE LA CONFIGURACION
router.put('/update/:id', docenteController.updateDocente)
router.delete('/delete/:id', docenteController.deleteDocente);

//RUTAS PARA CARGAR TODOS LOS DOCENTES CON SUS DATOS
router.get('/maestro/all',docenteController.allDocentes)
module.exports=router;