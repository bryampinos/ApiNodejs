const atrasoService= require('../services/atrasoService')
const crearAtraso = async (req, res) => {
    try {
        const atraso = await atrasoService.atrasoCreate(req.body);
        res.json("atraso agregado");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

const findByInspector = (req, res, next) => {
    const inspectorId = req.params.id;
    atrasoService.findByInspector(inspectorId)
        .then(esquela => {
            if (!esquela) {
                res.status(404).json({ message: 'Esquelas no encontradas' });
            } else {
                res.status(200).json(esquela);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
  };

module.exports={crearAtraso, findByInspector};
