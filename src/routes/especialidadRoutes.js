const express = require('express');
const router = express.Router();
const especialidadController= require('../controllers/especialidadController')

router.get('/all', especialidadController.getEspecilidades)
router.get('/:especialidad_id', especialidadController.getEspecialidadById)
//EDITAR LOS DOCENTES
router.post('/register', especialidadController.register)
//router.put('/update/:id', representanteController.updateRepresentante)
//router.delete('/delete/:id', representanteController.deleteDocente);
module.exports = router;
