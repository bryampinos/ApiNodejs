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
    },
    asignatura: {
        type: DataTypes.STRING
      }
   
  }
  , {
    tableName: 'docente',
    timestamps: false
});
  
module.exports = Docente;