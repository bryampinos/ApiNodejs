// models/Docente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');



const Docente = sequelize.define('docente', {
  iddocente: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  user_iduser: {
    type: DataTypes.STRING,
    references: {
      model: 'user',
      key: 'iduser'
    }
  }
}, {
  tableName: 'docente',
  timestamps: false
});

Docente.belongsTo(User, { foreignKey: 'user_iduser' });

module.exports = Docente;