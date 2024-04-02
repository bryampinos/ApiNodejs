
const representanteRepository = require('../repository/representanteRepository')

const representanteCreate = async(representante) =>{
    try {
        return await representanteRepository.createRepresentante(representante)
    } catch (error) {
        console.error('Error al registrar el representante:', error);
        throw error; 
    }


}


module.exports = {
    representanteCreate
   
  };
