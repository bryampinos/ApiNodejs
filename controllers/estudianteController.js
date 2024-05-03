const estudianteService = require('../services/estudianteService')
const crearEstudiante = async (req, res) => {
    try {
        const estudiante = await estudianteService.register(req.body);
        res.json("estudiante agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudianteService.getAllEstudiantes();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };


  const getEstudianteByCurso = async(req, res, next)=>{
    const estudianteId = req.params.id;
    estudianteService.getEstudianteById(estudianteId)
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
  }

  const getEstudianteByIdRepresentante = async(req, res, next)=>{
    const estudianteId = req.params.idpadre;
    estudianteService.getEstudianteByIdRepresentante(estudianteId)
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
  }

module.exports={crearEstudiante,getEstudiantes,getEstudianteByCurso,
    getEstudianteByIdRepresentante}