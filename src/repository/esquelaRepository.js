const Esquela =require('../models/esquela')
const Docente = require('../models/docente')
const User = require('../models/user')
const Estudiante = require('../models/estudiante')
const Asignacion = require('../models/asignaciónDocenteMateria')
const estudiante = require('../models/estudiante')
const { where } = require('sequelize')
const create = async (esquela) =>{
    return await Esquela.create(esquela);
}
const getAll =async()=>{
  try {
    return await Esquela.findAll({
      include: [
        {
          model: Docente,
          include: [
            {
              model: User,
            },
          ],
        },
        {
          model: Asignacion,  // Incluye el modelo Asignacion
        },
        {
          model: Estudiante,  // Incluye el modelo estudiante
        }
      ],
    })
  } catch (error) {
    throw new Error('Error al obtener las esquelas de la base de datos: ' + error.message);
  }
 
}


const findById = async (id) => {
    try {
      console.log(id)
      const esquela = await Esquela.findAll({
        where: { estudiantes_idEstudiantes: id },
        include: [
  
          {
           
            model: Docente,
            include: [
              {
                model: User,
              },
            ],
          },
          {
            model: Asignacion,  // Incluye el modelo Asignacion
          },
          {
            model: Estudiante,  // Incluye el modelo estudiante
          }
        ],
      });
      return esquela;
    } catch (error) {
      throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
    }
  };
  
const findByIdEsquela = async(id)=>{
    try {
        const esquela = await Esquela.findOne({ 
            where: { idEsquela: id } ,
            include: [
                {
                  model: Docente,
                  include: [{  model: User,}, ],
                },
                { model: Estudiante },
                {model: Asignacion },
              ],
        });
        return esquela;
    } catch (error) {
        throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
    }
}

const findByAsignacion = async(id)=>{
try {
  const esquela = await Esquela.findAll({
    where: { asignación_docente_materia_idAsignacion: id } ,
    include: [
      {
        model: Docente,
        include: [
          {
            model: User,
          },
        ],
      },
      {
        model: Estudiante,  // Incluye el modelo estudiante
      },
      {
        model: Asignacion,  // Incluye el modelo Asignacion
      }
    ],
  })
return esquela

} catch (error) {
  throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
}

}
const findByFecha = async(fecha)=>{
  try {
    const esquela = await Esquela.findAll({
      where: { Fecha: fecha } ,
      include: [
        {model: Docente,
        include: [ {   model: User, },
          ],  },{ model: Estudiante,  },
        {   model: Asignacion,   }   ], })
  return esquela
  
  } catch (error) {
    throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
  }
  }

  
const findByCurso = async(curso)=>{
  try {
    const esquela = await Esquela.findAll({

      include: [
        {
          model: Docente,
          include: [
            {
              model: User,
            },
          ],
        },
        {
          model: Estudiante, 
          where: { curso_idCurso: curso } // Incluye el modelo estudiante
        },
        {
          model: Asignacion,  // Incluye el modelo Asignacion
        }
      ],
    })
    
   
  return esquela
  
  } catch (error) {
    throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
  }
  
  }
  const fundByDocente = async(docente)=>{
    try {
      const esquela = await Esquela.findAll({
        where: { docente_docente: docente },
        include: [
          {
            model: Docente,
            include: [
              {
                model: User,
              },
            ],
          },
          {model: Estudiante,  },
          {model: Asignacion,  } ], })
      
    return esquela
    
    } catch (error) {
      throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
    } }

    const reporteByAsignacionAndEstudiante = async (idAsignacion, idEstudiante) => {
      try {
        const reporte = await Esquela.findAll({
          where: {
            asignación_docente_materia_idAsignacion: idAsignacion,
            estudiantes_idEstudiantes: idEstudiante
          },
          include: [
            {
              model: Docente,
              include: [
                {
                  model: User,
                },
              ],
            },
            { 
              model: Estudiante 
            },
            { 
              model: Asignacion 
            }
          ]
        });
        return reporte;
      } catch (error) {
        throw new Error('Error al obtener las esquela de la base de datos: ' + error.message);
      }
    };
    const updateEsquela = async (idEsquela) => {
      try {
          return await Esquela.update(
            { estado_esquela: "VISTO" },
            { where: { idEsquela } }
          )
      } catch (error) {
          throw new Error('Error al actualizar la esquela: ' + error.message);
      }
  };
module.exports={create,findById,findByIdEsquela,findByAsignacion,getAll,findByFecha,
  findByCurso,fundByDocente,reporteByAsignacionAndEstudiante,updateEsquela};