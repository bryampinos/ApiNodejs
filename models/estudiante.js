const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const estudiante =  sequelize.define('estudiante', {
    idEstudiantes: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      NombreEst: {
        type: DataTypes.STRING
      },
      ApellidoEst: {
        type: DataTypes.STRING
      },
      cedula: {
        type: DataTypes.STRING
      },
      representantes_idrepresentantes: {
          type: DataTypes.STRING,
        references: {
          model: 'representantes',
          key: 'idrepresentantes'
        }
      },
      curso_idCurso: {
        type: DataTypes.STRING,
      references: {
        model: 'curso',
        key: 'idCurso'
      }
    }
} 
, {
  tableName: 'estudiante',
  timestamps: false
});

module.exports=estudiante;