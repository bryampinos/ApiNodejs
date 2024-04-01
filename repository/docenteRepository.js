const Docente = require('../models/docente');
const docente = require('../models/docente')


const createDocente = async (docente) =>{
    return await Docente.create(docente);
}
const findDocenteById = async (user_iduser) => {
    return await Docente.findOne({ where: { user_iduser } });
  };
module.exports={
createDocente,
findDocenteById
}