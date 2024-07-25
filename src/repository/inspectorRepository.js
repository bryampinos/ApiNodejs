const Inspector = require('../models/inspector')
const cursomodel = require('../models/curso')
const InspectorUser=require('../models/user')
const createInspector = async (inspector) =>{
    return await Inspector.create(inspector);

}
const findInspectorByid = async (user_iduser) => {
    const inspector =  await Inspector.findOne({ where: { user_iduser } });
    return inspector.idIsnpector
   
  };


  const inspectorById = async(iduser)=>{
    try {
      return await InspectorUser.findByPk(iduser);
    } catch (error) {
      throw new Error('Error al obtener los inspectores de la base de datos: ' + error.message);
    }
    
  }
  
  const editarInspector =async(iduser, updateData)=>{
    try {
  
      const [updated] = await InspectorUser.update(updateData, {
        where: { iduser },
      });
      return updated;
    } catch (error) {
      throw new Error('Error al obtener los inspectores de la base de datos: ' + error.message);
    }
   
  }
  const deleteInspector=async(iduser)=> {
    try {
    await Inspector.destroy({where: {user_iduser: iduser } })
      const deleted = await InspectorUser.destroy({
        where: { iduser },
      });
      if (deleted === 0) {
        throw new Error('Inspector no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar el inspector de la base de datos: ' + error.message);
    }
  }
  const fetchAll = async()=>{
    try {
      const inspector = await InspectorUser.findAll({ where:{ rol: 'inspector'}});
      return inspector;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
  }
module.exports={createInspector,
    findInspectorByid,
    inspectorById,
    editarInspector,
    deleteInspector,
    fetchAll
    
}