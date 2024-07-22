const representanteService = require('../services/representanteService')

const getRepresentantes = async (req, res) => {
    try {
        const representantes = await representanteService.getAllRepresentantes();
        res.json(representantes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  const  updateRepresentante=async(req, res)=> {
    try {
      const iduser = req.params.id;
      const updateData = req.body;
      const updateRepresentante = await representanteService.updateRepresentante(iduser, updateData);
      res.json(updateRepresentante);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  const deleteDocente = async(req, res)=> {
    try {
      const iduser = req.params.id;
      await representanteService.deleteRepresentante(iduser);
      res.status(204).json(); // 204 No Content
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
module.exports={getRepresentantes,updateRepresentante,deleteDocente};
