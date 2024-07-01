
const express = require('express');
const atrasoController = require('../controllers/atrasoController')
const router = express.Router();


router.post('/register',atrasoController.crearAtraso );
//METODO GET PARA TRAER TODAS LAS ESQUELAS POR INSPECTOR
router.get('/all/:id', atrasoController.findByInspector)

module.exports = router;