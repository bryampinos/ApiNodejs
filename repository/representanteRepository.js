const Representante = require('../models/representante')

const createRepresentante = async (representante) =>{
    return await Representante.create(representante);

}
module.exports = {createRepresentante};