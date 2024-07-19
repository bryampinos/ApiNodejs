const express = require('express');
const router = express.Router();
const inspecorController = require('../controllers/inspectorController')

router.post('/registrarCurso', inspecorController.crearCurso);
router.put('/update/:id', inspecorController.updateInspector)
router.delete('/delete/:id', inspecorController.deleteInspector);
module.exports = router;