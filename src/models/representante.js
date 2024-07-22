const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Representante = sequelize.define('representantes', {
    idrepresentantes: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_iduser: {
        type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    
   
  }
  , {
    tableName: 'representantes',
    timestamps: false
});

module.exports = Representante;