const asignaturaService = require('../services/asignaturaService')


const crearAsignatura = async (req, res) => {
    try {
        const asignatura = await asignaturaService.asignaturaCreate(req.body);
        res.json("asignatura agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const editarAsignatura = async (req, res) => {
  try {
      const asignatura = await asignaturaService.editarAsignatura(req.body);
      res.json("asignatura editada");
  } catch (error) {
      res.status(401).json({ message: error.message });
  }
}
const getAsignaturas = async (req, res) => {
    try {
        const cursos = await asignaturaService.getAllAsignaturas(req.query);
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  const getAsignaturasBySeccion = async (req, res) => {
    try {
        const cursos = await asignaturaService.getAllAsignaturasBySeccion(req.query.jor_id,req.query.nivel_id);
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  const getAsignaturasByJornada = async (req, res) => {
    try {
        const cursos = await asignaturaService.getAllAsignaturasByJornada(req.params.nivel_id);
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  const getAsignaturasByNivel = async (req, res) => {
    try {
        const cursos = await asignaturaService.getAllAsignaturasByNivel(req.params.nivel_id);
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  const deleteAsignatura = async(req, res)=> {
    try {
      const idAsignatura = req.params.id;
      await asignaturaService.deleteAsignatura(idAsignatura);
      res.json('ASIGNATURA ELIMINADA').json(); // 204 No Content
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

module.exports={crearAsignatura,getAsignaturas,deleteAsignatura,
  getAsignaturasByJornada,getAsignaturasByNivel,getAsignaturasBySeccion,editarAsignatura};