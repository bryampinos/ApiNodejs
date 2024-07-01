const Atraso = require('../models/atraso')
const Estudiante = require('../models/estudiante')

const create = async (atraso) =>{
    return await Atraso.create(atraso);
}

const findbyInspector = async(id)=>{
    try {
        const atraso = await Atraso.findAll({ where: {isnpector_idIsnpector: id } ,
            include: [{model:Estudiante}]


        });
        return atraso;
    } catch (error) {
        throw new Error('Erro en la base ' + error.message);
    }
}

module.exports={create, findbyInspector};