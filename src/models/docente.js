// models/Docente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');


const Docente = sequelize.define('docente', {
  iddocente: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  user_iduser: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'iduser'
    }
  }
}, {
  tableName: 'docente',
  timestamps: false
});

Docente.belongsTo(User, { foreignKey: 'user_iduser' });
//dpcemte
module.exports = Docente;