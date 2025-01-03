const express = require('express');
const router = express.Router();
const inspecorController = require('../controllers/inspectorController')
//METODO PARA OBTENER TODOS LOS INSPECTORES 
router.get('/user/all', inspecorController.getInpectores)
//METODO PARA EDITAR LOS INSPECTORES
router.put('/update/:id', inspecorController.updateInspector)
router.put('/register', inspecorController.updateInspector)
//METODO PARA ELIMINAR LOS INSPECTORES
router.delete('/delete/:id', inspecorController.deleteInspector);



module.exports = router;