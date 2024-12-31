const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Nivel = require('./nivelAcademico')
const Jornada =require('./jornada')
const asignatura = sequelize.define('asignatura', {
    asig_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    asig_nombre: {
      type: DataTypes.STRING,
    
    },
    nivel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Nivel,
        key: 'nivel_id'
      }
    },
    jornada_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Jornada,
        key: 'jor_id'
      }
    },
  }, {
    tableName: 'asignatura',
    timestamps: false 
  });
  asignatura.belongsTo(Nivel, { foreignKey: 'nivel_id' });
  asignatura.belongsTo(Jornada, { foreignKey: 'jornada_id' });
  module.exports = asignatura ;