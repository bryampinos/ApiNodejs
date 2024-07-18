
const representanteRepository = require('../repository/representanteRepository')

const representanteCreate = async(representante) =>{
    try {
        return await representanteRepository.createRepresentante(representante)
    } catch (error) {
        console.error('Error al registrar el representante:', error);
        throw error; 
    }
}

const getAllRepresentantes = async() =>{
    try {
        const representantes = await representanteRepository.fetchAll();
        return representantes;
    } catch (error) {
        throw new Error('Error al obtener los representantes: ' + error.message);
    }
}
const updateRepresentante = async(iduser, updateData)=>{
    try {
      const representante = await representanteRepository.representanteById(iduser);
      if (!representante) {
        throw new Error('Representante no encontrado');
      }
      await representanteRepository.editarRepresentante(iduser, updateData);
      return await representanteRepository.representanteById(iduser);
    } catch (error) {
      throw new Error('Erro en el service');
    }
   
  }
  const deleteRepresentante=async(iduser)=> {
    try {
      const representante = await representanteRepository.representanteById(iduser);
      if (!representante) {
        throw new Error('Representante no encontrado');
      }
      return await representanteRepository.deleteRepresentante(iduser);
    } catch (error) {
      throw new Error('Error en el servicio: ' + error.message);
    }
  }

module.exports = {
    representanteCreate,
    getAllRepresentantes,
    updateRepresentante,
    deleteRepresentante
  };
