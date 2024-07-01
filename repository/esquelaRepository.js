const Esquela =require('../models/esquela')
const Docente = require('../models/docente')
<<<<<<< HEAD
const User = require('../models/user')
=======
const User = require('../models/User')
const Estudiante = require('../models/estudiante')
const Asignacion = require('../models/asignaciónDocenteMateria')
const estudiante = require('../models/estudiante')
>>>>>>> 236b3e1e58c53cadb8dcf504b8090ddce1744521
const create = async (esquela) =>{
    return await Esquela.create(esquela);
}
const findById = async (id) => {
    try {
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
                  include: [
                    {
                      model: User,
                    },
                  ],
                },
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
    include: [{model: Estudiante}]
  })
return esquela

} catch (error) {
  throw new Error('Error al obtener la esquela de la base de datos: ' + error.message);
}

}
module.exports={create,findById,findByIdEsquela,findByAsignacion};