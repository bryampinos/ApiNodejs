const express = require('express');
const router = express.Router();
const nivelController= require('../controllers/nivelAcademicoController')

router.get('/nivel/all', nivelController.getAll)
//EDITAR LOS DOCENTES
router.post('/nivel/register', nivelController.register)