const express = require('express');
const cursoController = require('../controllers/cursoController')
const router = express.Router();

router.post('/register', cursoController.crearCurso);
//METODOS GET
router.get('/all', cursoController.getCursos);
//METODO GET PARA EDITAR EL CURSO
router.put('/cursos/:id', cursoController.updateCurso);
//METODO PARA EL ELIMINAR UN CURSO
router.delete('/cursos/:id', cursoController.deleteCurso);

module.exports = router;