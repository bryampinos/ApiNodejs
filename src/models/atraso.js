const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Estudiante = require('../models/estudiante');
const User = require('./user');


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
      model: 'user',
      key: 'iduser'
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

atraso.belongsTo(User, { foreignKey: 'isnpector_idIsnpector' });
module.exports = atraso;
