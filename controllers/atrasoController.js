const atrasoService= require('../services/atrasoService')
const xl = require('excel4node');
const path = require('path');
const fs = require('fs');
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

  const generateReportFile = (inspectorId, reporte, res) => {
    let date = new Date();
    let fechaDia = date.getDate();
    let fechaMes = (date.getUTCMonth()) + 1; 
    let fechaAño = date.getUTCFullYear();
  
    let nombreArchivo = `reportes del curso ${inspectorId} ${fechaDia}_${fechaMes}_${fechaAño}.xlsx`;
    let wb = new xl.Workbook();
    let ws = wb.addWorksheet(nombreArchivo);
  
    let cualColumnaEstilo = wb.createStyle({
      font: {
        name: 'Arial',
        color: '#000000',
        size: 12,
        bold: true,
      }
    });
  
    let contenidoEstilo = wb.createStyle({
      font: {
        name: 'Arial',
        color: '#494949',
        size: 11,
      }
    });
  
    ws.cell(1, 1).string("N0 DE CEDULA").style(cualColumnaEstilo);
    ws.cell(1, 2).string("FECHA").style(cualColumnaEstilo);
    ws.cell(1, 3).string("HORA").style(cualColumnaEstilo);
    ws.cell(1, 4).string("NOMBRE").style(cualColumnaEstilo);
    ws.cell(1, 5).string("APELLIDO").style(cualColumnaEstilo);
    ws.cell(1, 6).string("CURSO").style(cualColumnaEstilo);
    ws.cell(1, 7).string("OBSERVACION").style(cualColumnaEstilo);
  
    let cualFila = 2;
    for (let i = 0; i < reporte.length; i++) {
      let reporteActual = reporte[i];
      
  
      ws.cell(cualFila, 1).string(reporteActual.estudiante.cedula).style(contenidoEstilo);
      ws.cell(cualFila, 2).string(reporteActual.registroFecha).style(contenidoEstilo);
      ws.cell(cualFila, 3).string(reporteActual.registroHora).style(contenidoEstilo);
      ws.cell(cualFila, 4).string(reporteActual.estudiante.NombreEst).style(contenidoEstilo);
      ws.cell(cualFila, 5).string(reporteActual.estudiante.ApellidoEst).style(contenidoEstilo);
      ws.cell(cualFila, 6).string(reporteActual.estudiante.curso_idCurso).style(contenidoEstilo);
      ws.cell(cualFila, 7).string(reporteActual.descripcion).style(contenidoEstilo);
  
      cualFila++;
    }
  
    const pathExcel = path.join(__dirname, 'excel', nombreArchivo);
    wb.write(pathExcel, function(err, stats) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al escribir el archivo Excel' });
      } else {
        res.download(pathExcel, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al descargar el archivo' });
          } else {
            fs.rm(pathExcel, (err) => {
              if (err) {
                console.log(err);
                res.status(500).json({ error: 'Error al borrar el archivo' });
              } else {
                console.log("Archivo descargado y borrado del servidor correctamente");
              }
            });
          }
        });
      }
    });
  };
  
  const generarReportes = async (req, res) => {
    const idCurso = req.params.id;
    try {
      const reporte = await atrasoService.reportes(idCurso);
      if (!reporte) {
        res.status(404).json({ message: 'Esquelas no encontradas' });
      } else {
        generateReportFile(idCurso, reporte, res);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  };
  const generarReportesByEstudiante = async (req, res) => {
    const inspectorId = req.params.id;
    try {
      const reporte = await atrasoService.reportesByEstudiante(inspectorId);
      if (!reporte) {
        res.status(404).json({ message: 'Esquelas no encontradas' });
      } else {
        generateReportFile(inspectorId, reporte, res);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  };
  const generarReportesByFecha = async (req, res) => {
    const inspectorId = req.params.id;
    try {
      const reporte = await atrasoService.reportesByFecha(inspectorId);
      if (!reporte) {
        res.status(404).json({ message: 'Esquelas no encontradas' });
      } else {
        generateReportFile(inspectorId, reporte, res);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  };


  
  
module.exports={crearAtraso, findByInspector,generarReportes, generarReportesByEstudiante ,generarReportesByFecha};
