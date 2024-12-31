const Docente = require('../models/docente');
const Asignacion = require('../models/asignaciónDocenteMateria');
const DocenteUser = require('../models/user')
const User = require('../models/user')
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
    throw new Error('Ya se encuentra asignado a esta asignatura',error);
  }
}
const findByuser = async (user_iduser) => {
  return await Docente.findOne({ where: { user_iduser } });
};
const crearDocente = async(docente) =>{
  try {
    console.log(docente)
    return await Docente.create(docente)
  } catch (error) {
    console.log(error)
    throw new Error('ERROR ALREGISTRAR EL DONCENTE',error);
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

//METODOS PARA EL CRUD 
const fetchAll = async()=>{
  try {
    const docentes = await DocenteUser.findAll({ where:{ rol: 'docente'}});
    return docentes;
} catch (error) {
    throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
}
}
const docenteById = async(iduser)=>{
  try {
    return await DocenteUser.findByPk(iduser);
  } catch (error) {
    throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
  }
  
}

const editardocente =async(iduser, updateData)=>{
  try {

    const [updated] = await DocenteUser.update(updateData, {
      where: { iduser },
    });
    return updated;
  } catch (error) {
    throw new Error('Error al obtener los docentes de la base de datos: ' + error.message);
  }
 
}
const deleteDocente=async(iduser)=> {
  try {
  await Docente.destroy({where: {user_iduser: iduser } })
    const deleted = await DocenteUser.destroy({
      where: { iduser },
    });
    if (deleted === 0) {
      throw new Error('docentes no encontrado');
    }
    return deleted;
  } catch (error) {
    throw new Error('Error al eliminar el docentes de la base de datos: ' + error.message);
  }
}
const docentesAll = async()=>{
  try {
     const docentes = await Docente.findAll({include: [
      {
        model: User,
        attributes: ['nombre','apellido']
      },
    ],})
    return docentes
  } catch (error) {
    throw new Error('Error al buscar los docentes en la base de datos  ' + error.message);
  }
}

module.exports={
createDocente,
findDocenteById,
asignarAsignatura,
findRepresenmtanteById,
fetchAll,
docenteById,
editardocente,
deleteDocente,
docentesAll,
crearDocente,
findByuser
}