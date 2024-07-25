// models/Docente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../models/user');


const Administrador = sequelize.define('administrador', {
    idAdministrador: {
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
  tableName: 'administrador',
  timestamps: false
});

Administrador.belongsTo(User, { foreignKey: 'user_iduser' });

module.exports = Administrador;