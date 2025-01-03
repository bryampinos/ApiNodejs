const inspectorService = require('../services/inspectorService')

const  updateInspector=async(req, res)=> {
    try {
      const iduser = req.params.id;
      const updateData = req.body;
      const updateInspector = await inspectorService.updateInspector(iduser, updateData);
      res.json(updateInspector);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  const  insertarInspector=async(req, res)=> {
    try {
      const iduser = req.params.id;
      const updateData = req.body;
      const updateInspector = await inspectorService.updateInspector(iduser, updateData);
      res.json(updateInspector);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  const deleteInspector = async(req, res)=> {
    try {
      const iduser = req.params.id;
      await inspectorService.deleteInspector(iduser);
      res.status(204).json(); // 204 No Content
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  const getInpectores = async (req, res) => {
    try {
        const inspector = await inspectorService.getAllInspector();
        res.json(inspector);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  module.exports={updateInspector,deleteInspector, getInpectores,}

