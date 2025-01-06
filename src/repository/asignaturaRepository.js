const Asignatura = require('../models/asignatura');
const jornada = require('../models/jornada');
const nivelAcademico = require('../models/nivelAcademico');

const asignaturaRegister= async (asignatura) => {
    return await Asignatura.create(asignatura);
  };
  const editarAsignatura= async (asignatura) => {
    
    return await Asignatura.update(asignatura,{
      where: { asig_id: asignatura.asig_id }, // Filtra por el ID del usuario
    });
  };
  const fetchAll = async(query)=>{
    try {
      if(query.nivel_id){
        return await Asignatura.findAll({ where: { nivel_id: query.nivel_id },

        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });}
      if(query.jornada_id){
        return await Asignatura.findAll({ where: { jornada_id: query.jornada_id },

        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });}
      if(query.jornada_id   ||query.nivel_id ){
        return await Asignatura.findAll({ where: { jornada_id: query.jornada_id,nivel_id: query.nivel_id },

        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });}
      return await Asignatura.findAll({

        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }
  }
  const fetchAllByJornada = async(jor_id)=>{
    try {
      const asignaturas = await Asignatura.findAll({
        where: { jornada_id: jor_id },
        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }

  }


  const fetchAllBySeccion = async(jor_id,nivel_id)=>{
    try {
      const asignaturas = await Asignatura.findAll({
        where: { jornada_id: jor_id ,nivel_id:nivel_id},
        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }

  }

  const fetchAllByNivel = async(nivel_id)=>{
    try {
      const asignaturas = await Asignatura.findAll({
        where: { nivel_id: nivel_id },
        include:[
          {model:jornada,attributes: ['jor_nombre']},
          {model:nivelAcademico , attributes:['nivel_descripcion']}
        ]
      });
      return asignaturas;
  } catch (error) {
      throw new Error('Error al obtener las asignaturas de la base de datos: ' + error.message);
  }

  
  }
  const findAsignaturaById = async(asig_id)=>{
    try {
      return await Asignatura.findByPk(asig_id);
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
    
  }
  const deleteAsignatura=async(asig_id)=> {
    try {
      const deleted = await Asignatura.destroy({
        where: { asig_id },
      });
      if (deleted === 0) {
        throw new Error('Asignatura no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar la asignatura de la base de datos: ' + error.message);
    }
  }
  module.exports={asignaturaRegister,fetchAll
    ,findAsignaturaById,deleteAsignatura,fetchAllByJornada,fetchAllByNivel,fetchAllBySeccion,editarAsignatura};