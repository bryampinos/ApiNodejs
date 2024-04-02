const express = require('express');
const router = express.Router();
const inspecorController = require('../controllers/inspectorController')

router.post('/registrarCurso', inspecorController.crearCurso);

module.exports = router;