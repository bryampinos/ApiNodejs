const Curso=require('../models/curso')

const cursoRegister = async (curso) => {
    return await Curso.create(curso);
  };
  module.exports={cursoRegister}