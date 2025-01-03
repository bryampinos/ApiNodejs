const nivelAcademicoService = require('../services/nivelAcademicoService');
const register = async (req, res) => {
    try {
      await nivelAcademicoService.nivelCreate(req.body);
    res.json({message: "nivel registrado"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const editarNivel = async (req, res) => {
    try {
      await nivelAcademicoService.editarNivel(req.body);
    res.json({message: "nivel editados"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const deleteNivel = async (req, res) => {
    try {
      await nivelAcademicoService.delteNivel(req.params);
    res.json({message: "nivel eliminado"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const getAll = async(req, res)=>{
    try {
        const niveles = await nivelAcademicoService.getAllNiveles()
        res.json(niveles)
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getJornadaById = async(req, res)=>{
  try {
      const niveles = await nivelAcademicoService.getJornadaById(req)
      res.json(niveles)
  } catch (error) {
      res.status(401).json({ message: error.message });
  }
}
  module.exports={register,getAll,getJornadaById,editarNivel,deleteNivel}