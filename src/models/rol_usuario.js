const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const rol_usuario = sequelize.define('rol_usuario', {
    rol_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    rol_nombre: {
        type: DataTypes.STRING,
      
     
    },
    
   
  }
  , {
    tableName: 'rol_usuario',
    timestamps: false
});

module.exports = Representante;