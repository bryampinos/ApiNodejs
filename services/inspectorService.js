const inspectorRepository = require('../repository/inspectorRepository')


const inspectorCreate = async(inspector) =>{
    try {
        return await inspectorRepository.createInspector(inspector)
    } catch (error) {
        console.error('Error al registrar el inspector:', error);
        throw error; 
    }


}

module.exports={inspectorCreate}