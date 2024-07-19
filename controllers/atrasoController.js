const atrasoService= require('../services/atrasoService')
const xl = require('excel4node');
const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');
const fechaActual = new Date();
const anio = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1;
const dia = fechaActual.getDate();
const fechaFormateada = `${anio}/${mes.toString().padStart(2, '0')}/${dia.toString().padStart(2, '0')} `;
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
  const atrsoByEstudiante = (req, res, next) => {
    const estudianteId = req.params.id;
    atrasoService.atrasoByEstudiante(estudianteId)
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
//GENERAR LOS REPORTES POR CURSO
  const generarReportesByCurso = async (req, res) => {
    const idCurso = req.params.id;
  
    const fileName = `Reporte del curso ${idCurso} F:${fechaFormateada}.xlsx`;
    try {
      const reporte = await atrasoService.reportes(idCurso);
      if (!reporte) {
        res.status(404).json({ message: 'Esquelas no encontradas' });
      } else {
        generateReportFile(res, fileName, reporte);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  };
//GENERAR LOS REPORTES POR ESTUDIANTE
  const generarReportesByEstudiante = async (req, res) => {
    const estudianteId = req.params.id;
    const fileName = `Reporte del Estudiante : ${estudianteId}.xlsx`;
    try {
      const reporte = await atrasoService.reportesByEstudiante(estudianteId);
      if (!reporte) {
        res.status(404).json({ message: 'Esquelas no encontradas' });
      } else {
        generateReportFile(res, fileName, reporte);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  };
  //GENERAR LOS REPORTES POR  FECHA EN ESPECIFICO
  const generarReportesByFecha = async (req, res) => {
    const fechaId = req.params.id;
    const fileName = `Reporte del dia :  ${fechaId}.xlsx`;
    try {
      const reporte = await atrasoService.reportesByFecha(fechaId);
      if (!reporte) {
        res.status(404).json({ message: 'Esquelas no encontradas' });
      } else {
        generateReportFile(res, fileName, reporte);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  };
  //GENERAR EL ROPERTE EN GENERAL, EL CREADOR DEL EXCEL 
  const generateReportFile = async ( res,fileName, reporte, ) => {
  
    // Crear un nuevo libro de trabajo
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('atrasos');
  //ESTILOS DEL EXCEL
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
    // Agregar encabezados
    ws.cell(1, 1).string("N0 DE CEDULA").style(cualColumnaEstilo);
    ws.cell(1, 2).string("FECHA").style(cualColumnaEstilo);
    ws.cell(1, 3).string("HORA").style(cualColumnaEstilo);
    ws.cell(1, 4).string("NOMBRE").style(cualColumnaEstilo);
    ws.cell(1, 5).string("APELLIDO").style(cualColumnaEstilo);
    ws.cell(1, 6).string("CURSO").style(cualColumnaEstilo);
    ws.cell(1, 7).string("OBSERVACION").style(cualColumnaEstilo);
  //AGREGARE EL CONTENIDO A LAS CELDAS 
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
    // Configurar las cabeceras de respuesta para descargar el archivo Excel
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');
    
    // Enviar el archivo Excel al cliente
    wb.write(`${fileName}`, res);
  };
  
  
module.exports={generateReportFile,crearAtraso, findByInspector,atrsoByEstudiante,generarReportesByCurso, generarReportesByEstudiante ,generarReportesByFecha};
