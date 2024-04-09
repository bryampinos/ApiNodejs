const atrasoService= require('../services/atrasoService')
const crearAtraso = async (req, res) => {
    try {
        const atraso = await atrasoService.atrasoCreate(req.body);
        res.json("atraso agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}


module.exports={crearAtraso};
