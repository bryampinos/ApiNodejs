const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const asignatura = require('./asignatura');


const asigDocenteMateria = sequelize.define('asigDocenteMateria', {
    docente_iddocente:{
        type: DataTypes.INTEGER,
      
        references: {
          model: 'docente',
          key: 'iddocente'
        }
    },
    asignatura_idasignatura:{
        type: DataTypes.INTEGER,
        
        references: {
          model: 'asignatura',
          key: 'idasignatura'
        }
    },
    
    curso_idCurso:{
      type: DataTypes.INTEGER,
 
      references: {
        model: 'curso',
        key: 'idCurso'
      }
  },
  IdAsignacion:{
    type: DataTypes.INTEGER,
    primaryKey: true
  
}
  }, {
    tableName: 'asignación_docente_materia',
    timestamps: false 
  });
  asigDocenteMateria.belongsTo(asignatura, { foreignKey: 'asignatura_idasignatura' });

  module.exports = asigDocenteMateria ;