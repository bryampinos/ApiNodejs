const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const especialidad= require('./especialidad');
const jornada = require('./jornada');
const nivelAcademico = require('./nivelAcademico');
const curso = sequelize.define('curso', {
    curso_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nivel_curso: {
    type: DataTypes.INTEGER
  },
  paralelo_curso: {
    type: DataTypes.STRING
  },
  especialidad_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'especialidad',
      key: 'especialidad_id'
    }
  },

  nivel_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'nivel_academico',
      key: 'nivel_id'
    }
  }
}, {
    tableName: 'curso',
    timestamps: false
});
curso.belongsTo(especialidad, { foreignKey: 'especialidad_id' });

curso.belongsTo(nivelAcademico, { foreignKey: 'nivel_id' });
module.exports = curso;