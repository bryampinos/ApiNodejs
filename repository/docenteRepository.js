const Docente = require('../models/docente');
const docente = require('../models/docente')
const Asignacion = require('../models/asignaciónDocenteMateria');


const createDocente = async (docente) =>{
    return await Docente.create(docente);
}
const findDocenteById = async (user_iduser) => {
  const docente = await Docente.findOne({ where: { user_iduser } });
  return docente.iddocente
};

const asignarAsignatura = async(asignacion) =>{
  try {
    return await Asignacion.create(asignacion)
  } catch (error) {
<<<<<<< HEAD
    throw new Error('Ya se encuentra asignado a esta asignatura'+ error);
=======
    throw new Error('Ya se encuentra asignado a esta asignatura',error);
>>>>>>> 1b6fe0496099e1e8143e96d415bc39e6019be482
  }
}
const findRepresenmtanteById = async(iddocente)=>{
try {
  const docente = await Docente.findOne({ where: { iddocente } });
        return docente;
} catch (error) {
  throw new Error('Erro al buscar el docente en la base de datos '+ error);
}
}

module.exports={
createDocente,
findDocenteById,
asignarAsignatura,
findRepresenmtanteById
}