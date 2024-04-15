const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const moment = require('moment-timezone'); // Importa moment-timezone
const atraso = sequelize.define('atraso', {
  idAtraso: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  registroFecha: {
    type: DataTypes.STRING,
  
  },
  isnpector_idIsnpector: {
    type: DataTypes.STRING,
    references: {
      model: 'inspector',
      key: 'idIsnpector'
    }
  },
  estudiantes_idEstudiantes: {
    type: DataTypes.STRING,
    references: {
      model: 'estudiante',
      key: 'idEstudiantes'
    }
  },
  descripcion:{
    type:DataTypes.STRING
  }
}, {
  tableName: 'atraso',
  timestamps: false // Desactivar timestamps automáticos de Sequelize
});


module.exports = atraso;
