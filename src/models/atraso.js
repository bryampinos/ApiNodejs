const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Estudiante = require('../models/estudiante')


const atraso = sequelize.define('atraso', {
  idAtraso: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  registroFecha: {
    type: DataTypes.STRING,
  
  },
  registroHora: {
    type: DataTypes.STRING},

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
  timestamps: false 
});

atraso.belongsTo(Estudiante, { foreignKey: 'estudiantes_idEstudiantes' });
module.exports = atraso;
