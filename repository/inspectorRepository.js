const Inspector = require('../models/inspector')
const cursomodel = require('../models/curso')

const createInspector = async (inspector) =>{
    return await Inspector.create(inspector);

}
const findInspectorByid = async (user_iduser) => {
    const inspector =  await Inspector.findOne({ where: { user_iduser } });
    return inspector.idIsnpector
   
  };

module.exports={createInspector,
    findInspectorByid
}