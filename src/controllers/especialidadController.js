const especialidadService = require("../services/especialidadService");

const getEspecilidades = async (req, res) => {
    try {
        const especialidades = await especialidadService.getEspecilidades();
        res.json(especialidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };


  const register = async (req, res) => {
    try {
      
      await especialidadService.createEspecialidad(req.body);
    res.json({message: "especialidad registrado"});
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  const getEspecialidadById = async (req, res) => {
    try {
      
     const especialidad = await especialidadService.getEspecialidadById(req.params.especialidad_id);
    res.json(especialidad);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
    
  };
  module.exports={getEspecilidades,register,getEspecialidadById}