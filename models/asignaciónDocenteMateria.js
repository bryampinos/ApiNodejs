const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const asigDocenteMateria = sequelize.define('asigDocenteMateria', {
    docente_iddocente:{
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'docente',
          key: 'iddocente'
        }
    },
    asignatura_idasignatura:{
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'asignatura',
          key: 'idasignatura'
        }
    },
    curso_idCurso:{
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'idCurso'
      }
  }
  }, {
    tableName: 'asignación docente-materia',
    timestamps: false 
  });

  module.exports = asigDocenteMateria ;