const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const especialidad = sequelize.define('especialidad', {
    especialidad_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    especialidad_nombre: {
        type: DataTypes.STRING,
    },
  }
  , {
    tableName: 'especialidad',
    timestamps: false
});

module.exports = especialidad;