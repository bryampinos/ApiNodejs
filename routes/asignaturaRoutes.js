
const express = require('express');
const asignaturaController = require('../controllers/asignaturaController');
const router = express.Router();


router.post('/register',asignaturaController.crearAsignatura );

//metodos get
router.get('/all',asignaturaController.getAsignaturas)
module.exports = router;