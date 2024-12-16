const NivelAcademico = require('../models/nivelAcademico');
const Jornada =require('../models/jornada')
const createNivelAcademico = async (nivel) => {
    try {
    return await NivelAcademico.create(nivel); 
    } catch (error) {
 throw new Error('ERROR AL REGISTRAR LOS NIVELES ACADEMICOS  ' + error.message);
    }
  };
  const getAllNiveles = async()=>{
   try {
   return await NivelAcademico.findAll({ include:[{
      model:Jornada,
     
      attributes:['jor_id','jor_nombre']
     }], attributes:['nivel_id','nivel_descripcion']});
     
 } catch (error) {
     throw new Error('ERROR AL OBTENER LOS NIVELES DE LA BASE DE DATOS ' + error.message);
 }
 }
 const getnivelesById = async(req)=>{
    try {
    return await NivelAcademico.findAll({
        where: {
            nivel_id: req.params.nivel_id,  
          },include:[{
       model:Jornada,
      
       attributes:['jor_id','jor_nombre']
      }], attributes:['nivel_id','nivel_descripcion']});
      
  } catch (error) {
      throw new Error('ERROR AL OBTENER LOS NIVELES DE LA BASE DE DATOS ' + error.message);
  }
  }
  module.exports={createNivelAcademico,getAllNiveles,getnivelesById}