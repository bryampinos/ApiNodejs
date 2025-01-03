const express = require('express');
const router = express.Router();
const nivelController= require('../controllers/nivelAcademicoController')

router.get('/all', nivelController.getAll)
router.get('/:nivel_id', nivelController.getJornadaById)
//EDITAR LOS DOCENTES
router.post('/register', nivelController.register)
router.patch('/patch', nivelController.editarNivel)
router.delete('/delete/:nivel_id', nivelController.deleteNivel)
module.exports = router;