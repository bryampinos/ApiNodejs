const express = require('express');
const router = express.Router();
const inspecorController = require('../controllers/inspectorController')

router.put('/update/:id', inspecorController.updateInspector)
router.delete('/delete/:id', inspecorController.deleteInspector);
router.get('/user/all', inspecorController.getInpectores)
module.exports = router;