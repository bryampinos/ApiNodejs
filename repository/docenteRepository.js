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
return await Asignacion.create(asignacion)

}

module.exports={
createDocente,
findDocenteById,
asignarAsignatura
}