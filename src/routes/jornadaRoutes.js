const express = require('express');
const router = express.Router();
const jornadaController= require('../controllers/jornadaController')

router.get('/jornada/all', jornadaController.getAll)

router.post('/jornada/registrar', jornadaController.register)

//EDITAR LOS DOCENTES
// router.put('/update/:id', jornadaController.updateRepresentante)

module.exports = router;
