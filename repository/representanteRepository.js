const Representante = require('../models/representante')

const createRepresentante = async (representante) =>{
    return await Representante.create(representante);

}
const findRepresentanteById = async (user_iduser)=>{
     
    const representante = await Representante.findOne({ where: { user_iduser } });
return representante.idrepresentantes
}

const verificarRepresentante = async (representantes_idrepresentantes) => {
    try {
        return await Representante.findByPk(representantes_idrepresentantes);
      } catch (error) {
        console.error("Error al verificar la existencia del curso:", error);
      }
}
module.exports = {createRepresentante,
    findRepresentanteById,
    verificarRepresentante
};