const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const esquela = sequelize.define('esquela', {
    idEsquela:{
        type: DataTypes.STRING,
    primaryKey: true
    },
    Fecha :{
        type: DataTypes.STRING   
    },
    Motivo : {
        type: DataTypes.STRING     
    },
    Descripcion: {
        type: DataTypes.STRING     
    
    },
    Evidencia:{
        type: DataTypes.STRING 
    },
    docente_docente:{
        type: DataTypes.STRING,
        references: {
          model: 'docente',
          key: 'iddocente'
        }
    },
    estudiantes_idEstudiantes:{
        type: DataTypes.STRING,
        references: {
          model: 'representantes',
          key: 'idrepresentantes'
        }
    }

}, {
    tableName: 'esquela',
    timestamps: false
  })

  module.exports=esquela;