const express = require('express');
const router = express.Router();
const representanteController= require('../controllers/representanteController')

router.post('/registerestudiante', representanteController.registrarEstudiante);

module.exports = router;
