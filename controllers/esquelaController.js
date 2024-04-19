const esquelaService = require('../services/esquelaService')

const crearEsquela = async (req, res) => {
    try {
        const esquela = await esquelaService.esquelaCreate(req.body);
        res.json("esquela creada");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports={crearEsquela}