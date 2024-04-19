const cursoService = require('../services/cursoService')
const crearCurso = async (req, res) => {
    try {
        const curso = await cursoService.createCurso(req.body);
        res.json("curso agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getCursos = async (req, res) => {
    try {
        
        const cursos = await cursoService.getAllCursos();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };


module.exports={crearCurso,getCursos}