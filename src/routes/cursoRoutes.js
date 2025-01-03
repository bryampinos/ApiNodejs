const express = require('express');
const cursoController = require('../controllers/cursoController')
const router = express.Router();

router.post('/register', cursoController.crearCurso);
//METODOS GET
router.get('/all', cursoController.getCursos);
router.get('/curso/:curso_id', cursoController.getCursosById);
//METODO GET PARA EDITAR EL CURSO
router.patch('/patch', cursoController.updateCurso);
//METODO PARA EL ELIMINAR UN CURSO
router.delete('/delete/:id', cursoController.deleteCurso);

module.exports = router;