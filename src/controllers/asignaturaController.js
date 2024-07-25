const asignaturaService = require('../services/asignaturaService')


const crearAsignatura = async (req, res) => {
    try {
        const asignatura = await asignaturaService.asignaturaCreate(req.body);
        res.json("asignatura agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getAsignaturas = async (req, res) => {
    try {
        const cursos = await asignaturaService.getAllAsignaturas();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  const deleteAsignatura = async(req, res)=> {
    try {
      const idAsignatura = req.params.id;
      await asignaturaService.deleteAsignatura(idAsignatura);
      res.status(204).json(); // 204 No Content
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

module.exports={crearAsignatura,getAsignaturas,deleteAsignatura};