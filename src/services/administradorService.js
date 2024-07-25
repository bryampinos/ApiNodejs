const administradorRepository = require('../repository/administradorRepository')


const administradorCreate = async (administrador) => {
    try {
        
        return await administradorRepository.createAdministeador(administrador)
    } catch (error) {
        console.error('Error al registrar el administrador:', error);
        throw error;
    }

}  
module.exports={administradorCreate}