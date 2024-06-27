const esquelaService = require('../services/esquelaService')

const crearEsquela = async (req, res) => {
    try {
        const esquela = await esquelaService.esquelaCreate(req.body);
        res.json("esquela creada");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

const getEsquelaByEstudiante = (req, res, next) => {
    const esquelaId = req.params.idEstudiante;
    esquelaService.getEsquelaByEstudiante(esquelaId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
  };

  const getEsquelaById = (req, res, next) => {
    const esquelaId = req.params.id;
    esquelaService.getEsquelaById(esquelaId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
  };
  const getEsquelaByAsignacion = (req, res, next) => {
    const esquelaId = req.params.idasignaciondocentemateria;
    esquelaService.getEsquelabyAsignacion(esquelaId)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'Usuario no encontrado' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
  };

module.exports={crearEsquela,getEsquelaByEstudiante,getEsquelaById,getEsquelaByAsignacion}