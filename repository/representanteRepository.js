const Representante = require('../models/representante')

const createRepresentante = async (representante) =>{
    return await Representante.create(representante);

}
const findRepresentanteById = async (user_iduser)=>{
    return await Representante.findOne({ where: { user_iduser } });
}
module.exports = {createRepresentante,
    findRepresentanteById
};