const asignaturaService = require('../services/asignaturaService')


const crearAsignatura = async (req, res) => {
    try {
        const asignatura = await asignaturaService.asignaturaCreate(req.body);
        res.json("asignatura agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}


module.exports={crearAsignatura};