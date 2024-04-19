const Esquela =require('../models/esquela')
const create = async (esquela) =>{
    return await Esquela.create(esquela);
}

module.exports={create};