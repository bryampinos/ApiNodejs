const Curso=require('../models/curso')

const cursoRegister = async (curso) => {
    return await Curso.create(curso);
  };

  const fetchAll = async ()=>{
    try {
      const cursos = await Curso.findAll();
      return cursos;
  } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
  }
  }
  module.exports={cursoRegister,fetchAll}

 