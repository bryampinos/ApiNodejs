const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const asigDocenteMateria = sequelize.define('asigDocenteMateria', {
    docente_iddocente:{
        type: DataTypes.STRING,
<<<<<<< HEAD
=======
      
>>>>>>> d7a9a5aa0b23216290253a7e67cdc900cfbafd3a
        references: {
          model: 'docente',
          key: 'iddocente'
        }
    },
    asignatura_idasignatura:{
        type: DataTypes.STRING,
<<<<<<< HEAD
=======
        
>>>>>>> d7a9a5aa0b23216290253a7e67cdc900cfbafd3a
        references: {
          model: 'asignatura',
          key: 'idasignatura'
        }
    },
    
    curso_idCurso:{
      type: DataTypes.STRING,
<<<<<<< HEAD
=======
 
>>>>>>> d7a9a5aa0b23216290253a7e67cdc900cfbafd3a
      references: {
        model: 'curso',
        key: 'idCurso'
      }
  },
<<<<<<< HEAD
  idAsignacion:{
    type: DataTypes.INTEGER,
    primaryKey: true,

=======
  IdAsignacion:{
    type: DataTypes.STRING,
    primaryKey: true
  
>>>>>>> d7a9a5aa0b23216290253a7e67cdc900cfbafd3a
}
  }, {
    tableName: 'asignación docente-materia',
    timestamps: false 
  });

  module.exports = asigDocenteMateria ;