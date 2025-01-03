const Especialidad = require("../models/especialidad");

const getAllEspecialidades = async () => {
  return await Especialidad.findAll();
 
};
const createEspecialidad = async (especialidad) => {
  try {
  return await Especialidad.create(especialidad);
      
  } catch (error) {
throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
};
const EditarEspecialdiad = async (especialidad) => {
  try {
  return await Especialidad.update(especialidad,{
    where: { especialidad_id: especialidad.especialidad_id }, // Filtra por el ID del usuario
  });
      
  } catch (error) {
throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
};
const eliminarEspecialdiad = async (especialidad) => {
  try {
  return await Especialidad.destroy({
    where: { especialidad_id: especialidad }, // Filtra por el ID del usuario
  });
      
  } catch (error) {
throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
};
const findEspecialidadById = async (especialidad_id)=>{
     
  const especialidad = await Especialidad.findByPk(especialidad_id);
return especialidad
}
module.exports={getAllEspecialidades,createEspecialidad,findEspecialidadById,EditarEspecialdiad,eliminarEspecialdiad

}