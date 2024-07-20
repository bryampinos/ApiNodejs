const Representante = require('../models/representante')
const RepresentanteUser = require('../models/User');
const User = require('../models/User');
const { use } = require('../routes/docenteRoutes');
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

//METODOS PARA EL CRUD 
const fetchAll = async()=>{
    try {
      const representantes = await RepresentanteUser.findAll({ where:{ rol: 'representante'}});
      return representantes;
  } catch (error) {
      throw new Error('Error al obtener los docentes de la base de datos: ' + error.message);
  }
  }

  const representanteById = async(iduser)=>{
    try {
      return await RepresentanteUser.findByPk(iduser);
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
    
  }

  const editarRepresentante =async(iduser, updateData)=>{
    try {
  
      const [updated] = await RepresentanteUser.update(updateData, {
        where: { iduser },
      });
      return updated;
    } catch (error) {
      throw new Error('Error al obtener los docentes de la base de datos: ' + error.message);
    }
   
  }
  const deleteRepresentante=async(iduser)=> {
    try {
    await Representante.destroy({where: {user_iduser: iduser } })
      const deleted = await RepresentanteUser.destroy({
        where: { iduser },
      });
      if (deleted === 0) {
        throw new Error('Docente no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar el docente de la base de datos: ' + error.message);
    }
  }
  
module.exports = {createRepresentante,
    findRepresentanteById,
    verificarRepresentante,
    fetchAll,
    representanteById,
    editarRepresentante,
    deleteRepresentante
};