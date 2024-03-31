const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:admin@localhost:3306/aplicacion');

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