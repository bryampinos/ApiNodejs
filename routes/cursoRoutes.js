const express = require('express');
const cursoController = require('../controllers/cursoController')
const router = express.Router();

router.post('/register', cursoController.crearCurso);
//METODOS GET
router.get('/all', cursoController.getCursos);

module.exports = router;