// models/Docente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');
const Nivel = require ('./nivelAcademico')


const Docente = sequelize.define('docente', {
  iddocente: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_iduser: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'iduser'
    }
  },
  nivel_academico_nivel_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Nivel,
      key: 'nivel_id'
    }
  }
}, {
  tableName: 'docente',
  timestamps: false
});

Docente.belongsTo(User, { foreignKey: 'user_iduser' });
Docente.belongsTo(Nivel,{foreignKey: 'jornada_jor_id'})
//dpcemte
module.exports = Docente;