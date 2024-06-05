const Esquela =require('../models/esquela')
const Docente = require('../models/docente')
const User = require('../models/User')
const create = async (esquela) =>{
    return await Esquela.create(esquela);
}
const findById = async(id)=>{
    try {
        const esquela = await Esquela.findAll({ 
            where: { estudiantes_idEstudiantes: id } 
        });
        return esquela;
    } catch (error) {
        throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
    }
}
const findByIdEsquela = async(id)=>{
    try {
        const esquela = await Esquela.findOne({ 
            where: { idEsquela: id } ,
            include: [
                {
                  model: Docente,
                  include: [
                    {
                      model: User,
                    },
                  ],
                },
              ],
        });
        return esquela;
    } catch (error) {
        throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
    }
}
module.exports={create,findById,findByIdEsquela};