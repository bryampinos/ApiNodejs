const Atraso = require('../models/atraso')

const create = async (atraso) =>{
    return await Atraso.create(atraso);
}

module.exports={create};