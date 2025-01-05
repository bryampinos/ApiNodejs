const jornadaService = require('../services/jornadaService');
const register = async (req, res) => {
    try {
      
      await jornadaService.jornadaCreate(req.body);
    res.json({message: "usuario registrado"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const editarJornada = async (req, res) => {
    try {
      
      await jornadaService.editarJornada(req.body);
    res.json({message: "JORNADA EDITADA"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const eliminarJornada = async (req, res) => {
    try {
      
      await jornadaService.eliminarJornada(req.params.id);
    res.json({message: "JORNADA ELIMINADA"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const getAll = async(req, res)=>{
    try {
        const jornadas = await jornadaService.getAllJornadas()
        res.json(jornadas)
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getJornadaById = async(req, res)=>{
  try {
      const jornadas = await jornadaService.getJotnadaById(req)
      res.json(jornadas)
  } catch (error) {
      res.status(401).json({ message: error.message });
  }
}

  module.exports ={register,getAll,getJornadaById,editarJornada,eliminarJornada}