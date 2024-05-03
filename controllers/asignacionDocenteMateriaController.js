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

  module.exports={getAsignacionByDocente}