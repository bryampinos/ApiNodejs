const asignacionDocenteMateriaService=require('../services/asingacionDocenteMateriaService')

const getAsignacionByDocente = async(req, res, next)=>{
    const docenteId = req.params.id;
    asignacionDocenteMateriaService.getAsignacionPorDocente(docenteId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
  }

  const getAsignacionDocenteById = async(req, res, next)=>{
    const asignacionId = req.params.id;
    asignacionDocenteMateriaService.getAsignacionById(asignacionId)
    .then(user => {
        if (!user) {
            res.status(404).json({ message: 'asignacion de docente no encontrado' });
        } else {
            res.status(200).json(user);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
  }

const  editarAsignacion=async(req, res)=> {
  try {
   
    const updateDocente =  asignacionDocenteMateriaService.editarAsignacion(req.body)
    res.json('DOCENTE EDITADO');
  } catch (error) {
    throw new Error('error al editar asignacion: ' + error.message);
  }
}
const deleteAsignacion=async(req, res)=> {
  try {
   
    const updateDocente =  asignacionDocenteMateriaService.eliminarAsignacion(req.params.id)
    res.json('ASINGNACION ELIMINADA');
  } catch (error) {
    throw new Error('Error al elimiar asignacion: ' + error.message);
  }
}
  module.exports={getAsignacionByDocente,getAsignacionDocenteById,editarAsignacion,deleteAsignacion}