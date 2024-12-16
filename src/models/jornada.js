const sequelize = require("../../config/db");
const { DataTypes } = require('sequelize');
const jornada = sequelize.define('jornada', {
    jor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    jor_nombre: {
      type: DataTypes.STRING,
    
    },
    jor_estado: {
      type: DataTypes.BOOLEAN},
  
   
  }, {
    tableName: 'jornada',
    timestamps: false 
  });
  
  
  module.exports = jornada;