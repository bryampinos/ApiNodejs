const express = require('express');
const cursoController = require('../controllers/cursoController')
const router = express.Router();

router.post('/register', cursoController.crearCurso);

module.exports = router;