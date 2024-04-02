const estudianteService = require('../services/estudianteService')
const crearEstudiante = async (req, res) => {
    try {
        const estudiante = await estudianteService.register(req.body);
        res.json("estudiante agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}


module.exports={crearEstudiante}