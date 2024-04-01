const Inspector = require('../models/inspector')

const createInspector = async (inspector) =>{
    return await Inspector.create(inspector);

}
const findInspectorByid = async (user_iduser) => {
    return await Inspector.findOne({ where: { user_iduser } });
  };

module.exports={createInspector,
    findInspectorByid
}