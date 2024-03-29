const Docente = require('../models/docente');
const docente = require('../models/docente')


const createDocente = async (docente) =>{
    return await Docente.create(docente);
}

module.exports={
createDocente
}