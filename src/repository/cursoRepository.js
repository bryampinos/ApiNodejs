const Curso=require('../models/curso');
const especialidad = require('../models/especialidad');
const jornada = require('../models/jornada');
const nivelAcademico = require('../models/nivelAcademico');

const cursoRegister = async (curso) => {
  try {
    return await Curso.create(curso);
  } catch (error) {
    throw new Error('Error al crear el curso en la base de datos  ' + error.message);
  }
    
  };
  const fetchAll = async () => {
    try {
      return await Curso.findAll({
        include: [
          {
            model: especialidad,
            attributes: ['especialidad_nombre'] // Atributos de la tabla especialidad
          },
          {
            model: nivelAcademico,
            attributes: ['nivel_id', 'nivel_descripcion'], // Atributos de nivel_academico
            include: [
              {
                model: jornada, // Relación anidada con jornada
                attributes: ['jor_id', 'jor_nombre'] // Atributos de jornada
              }
            ]
          }
        ],
        attributes: ['curso_id', 'nivel_curso', 'paralelo_curso'] // Atributos de curso
      });
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
  };
  

const findCursoById = async(idCurso)=>{
  try {
    return await Curso.findOne({
      where: { curso_id: idCurso }, // Condición para buscar por ID
      include: [
        {
          model: especialidad,
          attributes: ['especialidad_nombre'] // Atributos de la tabla especialidad
        },
        {
          model: nivelAcademico,
          attributes: ['nivel_id', 'nivel_descripcion'], // Atributos de nivel_academico
          include: [
            {
              model: jornada, // Relación anidada con jornada
              attributes: ['jor_id', 'jor_nombre'] // Atributos de jornada
            }
          ]
        }
      ],
      attributes: ['curso_id', 'nivel_curso', 'paralelo_curso'] // Atributos de curso
    });
  } catch (error) {
    throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
  }
  
}

  const EditarCurso =async(idCurso, updateData)=>{
    try {
      console.log("entro al repo")
      const [updated] = await Curso.update(updateData, {
        where: { idCurso },
      });
      return updated;
    } catch (error) {
      throw new Error('Error al obtener los cursos de la base de datos: ' + error.message);
    }
   
  }

  const deleteCurso=async(curso_id)=> {
    try {
      const deleted = await Curso.destroy({
        where: { curso_id:curso_id },
      });
      if (deleted === 0) {
        throw new Error('Curso no encontrado');
      }
      return deleted;
    } catch (error) {
      throw new Error('Error al eliminar el curso de la base de datos: verifique que ningun usuario este asociado a  este curso  ' + error.message);
    }
  }
   module.exports={cursoRegister,fetchAll, findCursoById, EditarCurso,deleteCurso}

 