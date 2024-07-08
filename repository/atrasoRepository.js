const Atraso = require('../models/atraso')
const Estudiante = require('../models/estudiante')

const create = async (atraso) =>{
    return await Atraso.create(atraso);
}

const findbyInspector = async(id)=>{
    try {
        const atraso = await Atraso.findAll({ where: {isnpector_idIsnpector: id } ,
            include: [{model:Estudiante}]


        });
        return atraso;
    } catch (error) {
        throw new Error('Erro en la base ' + error.message);
    }
}

const generateDoc = async(id)=>{
    try {
        const reporte = await Atraso.findAll({
            include:[{
             model:Estudiante,
             where:{curso_idCurso:id},
             attributes:['NombreEst','ApellidoEst','curso_idCurso','cedula']
            }],
            attributes:['registroFecha','registroHora','estudiantes_idEstudiantes','descripcion']
           })  

           return reporte;
    } catch (error) {
        throw new Error('Erro en la base ' + error.message);
    }
    
  
  }
  
  const generateDocByEstudiante = async(id)=>{
    try {
        const reporte = await Atraso.findAll({
            include:[{
             model:Estudiante,
             where:{cedula:id},
             attributes:['NombreEst','ApellidoEst','curso_idCurso','cedula']
            }],
            attributes:['registroFecha','registroHora','estudiantes_idEstudiantes','descripcion']
           })  

           return reporte;
    } catch (error) {
        throw new Error('Erro en la base ' + error.message);
    }

  }
  const generateDocByfecha = async(id) => {
try {
    const reporte = await Atraso.findAll({
        include:[{
         model:Estudiante,
        
         attributes:['NombreEst','ApellidoEst','curso_idCurso','cedula']
        }],
        where:{registroFecha:id},
        attributes:['registroFecha','registroHora','estudiantes_idEstudiantes','descripcion']
       })  

       return reporte;
   
} catch (error) {
    throw new Error('Error en la base de datos: ' + error.message);
}
  }

  
module.exports={create, findbyInspector, generateDoc, generateDocByEstudiante,generateDocByfecha}