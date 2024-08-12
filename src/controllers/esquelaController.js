
const esquelaService = require('../services/esquelaService')

const crearEsquela = async (req, res) => {
    try {
        const esquela = await esquelaService.esquelaCreate(req.body);
        res.json("esquela creada");
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getAll = async(req, res)=>{
    try {
        const esquelas = await esquelaService.getAll()
        res.json(esquelas)
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

  const getEsquelasPDF = async (req, res) => {
    await esquelaService.generateEsquelasPDF(res);
};
const getReporteByEstudiante = async(req, res)=>{
    const estudianteId = req.params.id;
    const fileName = 'reporte del estudiante'+estudianteId+'.pdf'
    await esquelaService.reporteByEstudiante(res,fileName,estudianteId)

}
const getReporteByFecha = async(req, res)=>{
    const fecha = req.params.fecha;
    const fileName = 'reporte del '+fecha+'.pdf'
    await esquelaService.reporteByFecha(res,fileName,fecha)

}
const getReporteByCurso = async(req, res)=>{
    const curso = req.params.curso;
    const fileName = 'reporte del curso_ '+curso+'.pdf'
    await esquelaService.reporteByCurso(res,fileName,curso)

}
const getReporteByDocente = async(req, res)=>{
    const docente = req.params.docente;
    const fileName = 'reporte del docente_'+docente+'.pdf'
    await esquelaService.reporteByDocente(res,fileName,docente)

}
const getReporteByAsignacion = async(req, res)=>{
    const asignacion = req.params.asignacion;
    const fileName = 'reporte del'+asignacion+'.pdf'
    await esquelaService.reporteByAsignacion(res,fileName,asignacion)

}
const reporteByAsignacionAndEstudiante = async (req, res)=>{
    try {
const idAsignacion = req.params.idAsignacion
const idEstudiante = req.params.idEstudiante
const fileName = `reporte del estudiante ${idEstudiante}.pdf`
await esquelaService.reporteByAsignacionAndEstudiante(res,fileName,idAsignacion,idEstudiante)
    } catch (error) {
    
    }
}
module.exports={getReporteByDocente,getReporteByCurso,getReporteByFecha,crearEsquela,getAll,
    getEsquelaByEstudiante,getEsquelaById,
    getEsquelaByAsignacion,getEsquelasPDF,getReporteByEstudiante,getReporteByAsignacion,reporteByAsignacionAndEstudiante}