const express = require('express');
const router = express.Router();
const jornadaController= require('../controllers/jornadaController')

router.get('/all', jornadaController.getAll)
router.get('/:jor_id', jornadaController.getJornadaById)
router.post('/registrar', jornadaController.register)

//EDITAR LOS DOCENTES
// router.put('/update/:id', jornadaController.updateRepresentante)

module.exports = router;
