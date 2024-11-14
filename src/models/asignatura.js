const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const asignatura = sequelize.define('asignatura', {
    idasignatura: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
    
    },
    descripcion: {
        type: DataTypes.STRING,
      
      }
  }, {
    tableName: 'asignatura',
    timestamps: false 
  });

  module.exports = asignatura ;