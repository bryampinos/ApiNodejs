const jornadaService = require('../services/jornadaService');
const register = async (req, res) => {
    try {
      await jornadaService.jornadaCreate(req.body);
    res.json({message: "usuario registrado"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const getAll = async( res)=>{
    try {
        const jornadas = await jornadaService.getAllJornadas()
        res.json(jornadas)
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

  module.exports ={register,getAll}