const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Inspector = sequelize.define('inspector', {
    idIsnpector: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_iduser: {
        type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
   
  }
  , {
    tableName: 'inspector',
    timestamps: false
});
  
module.exports = Inspector;