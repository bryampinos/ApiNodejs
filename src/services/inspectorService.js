const inspectorRepository = require('../repository/inspectorRepository')


const inspectorCreate = async(inspector) =>{
    try {
        return await inspectorRepository.createInspector(inspector)
    } catch (error) {
        console.error('Error al registrar el inspector:', error);
        throw error; 
    }


}


const updateInspector = async(iduser, updateData)=>{
    try {
      const inspector = await inspectorRepository.inspectorById(iduser);
      if (!inspector) {
        throw new Error('Inspector no encontrado');
      }
      await inspectorRepository.editarInspector(iduser, updateData);
      return await inspectorRepository.inspectorById(iduser);
    } catch (error) {
      throw new Error('Erro en el service');
    }
   
  }
  const deleteInspector=async(iduser)=> {
    try {
      const inspector = await inspectorRepository.inspectorById(iduser);
      if (!inspector) {
        throw new Error('inspector no encontrado');
      }
      return await inspectorRepository.deleteInspector(iduser);
    } catch (error) {
      throw new Error('Error en el servicio: ' + error.message);
    }
  }
  const getAllInspector = async() =>{
    try {
        const inspector = await inspectorRepository.fetchAll();
        return inspector;
    } catch (error) {
        throw new Error('Error al obtener las asignaturas: ' + error.message);
    }
}
module.exports={inspectorCreate,
    updateInspector,
    deleteInspector,
    getAllInspector,
    
}