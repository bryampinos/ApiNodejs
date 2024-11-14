const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const curso = sequelize.define('curso', {
    idCurso: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  curso: {
    type: DataTypes.STRING
  },
  paralelo: {
    type: DataTypes.STRING
  },
  especialidad:{
    type: DataTypes.STRING
  }
}, {
    tableName: 'curso',
    timestamps: false
});

module.exports = curso;