const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:admin@localhost:3306/aplicacion');
const Inspector = sequelize.define('inspector', {
    idIsnpector: {
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
    tableName: 'inspector',
    timestamps: false
});
  
module.exports = Inspector;