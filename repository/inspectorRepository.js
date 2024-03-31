const Inspector = require('../models/inspector')

const createInspector = async (inspector) =>{
    return await Inspector.create(inspector);

}

module.exports={createInspector}