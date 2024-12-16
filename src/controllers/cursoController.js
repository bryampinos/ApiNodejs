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
  const getCursosById = async (req, res) => {
    try {
        
        const cursos = await cursoService.getCursoById(req.params.curso_id);
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };

  
   const  updateCurso=async(req, res)=> {
      try {
        const idCurso = req.params.id;
        const updateData = req.body;
        const updatedCurso = await cursoService.updateCurso(idCurso, updateData);
        res.json(updatedCurso);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
    const deleteCurso = async(req, res)=> {
      try {
        const idCurso = req.params.id;
        await cursoService.deleteCurso(idCurso);
        res.status(204).json(); // 204 No Content
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
 
module.exports={crearCurso,getCursos, updateCurso, deleteCurso,getCursosById}