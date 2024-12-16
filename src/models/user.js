const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = sequelize.define('user', {
  iduser: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  cedula: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  rol_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'rol_usuario',
      key: 'rol_id'
    }
  }
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = User;
