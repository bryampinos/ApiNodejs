const esquelaRepository = require('../repository/esquelaRepository')
const jwt = require('jsonwebtoken');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const esquelaCreate = async(esquela)=>{
try {
    if(!esquela.Motivo){
        throw new Error('FALTA EL MOTIVO');
    }else if(!esquela.estudiantes_idEstudiantes){
        throw new Error(' NO SE A SELECCIONADO AL ESTUDIANTE');
    }
    //AQUI SACAMOS EL ID DEL TOKEN 
    const token = esquela.token
    const secret = process.env.SECRET;
    const decoded = jwt.decode(token, secret);
    esquela.docente_docente = decoded.idRol;
    //AQUI ESTOY REWGISTRANDO Y DANDO FOTMATO A LA FECHA DE ACUEDO A CUANDO ENTRRA 
    const fechaActual = new Date();
const anio = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1;
const dia = fechaActual.getDate();
const horas = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();
const fechaFormateada = `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')} ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
const [fecha, hora] = fechaFormateada.split(' ');
esquela.Fecha= fecha
esquela.hora= hora


//esquela.idEsquela = esquela.estudiantes_idEstudiantes+"||"+esquela.asignación_docente_materia_idAsignacion
    return await esquelaRepository.create(esquela);
} catch (error) {
    console.error('Error al registrar la esquela:', error);
        throw error; 
}
}

const getAll =async()=>{
    try {
        return await  esquelaRepository.getAll();
    } catch (error) {
        console.error('error al buscar la esquela ', error);
        throw error
    }
}
const getEsquelaByEstudiante = async (id) => {
    try {
        const esquela = esquelaRepository.findById(id);
        
        return (esquela)
    } catch (error) {
        console.error('error al buscar la esquela ', error);
        throw error
    }
   
  };

  const getEsquelaById = async (id) => {
    try {
        const esquela = esquelaRepository.findByIdEsquela(id);
      
      
        return (esquela)
    } catch (error) {
        console.error('error al buscar la esquela ', error);
        throw error
    }
   
  };

 
  const getEsquelabyAsignacion = async (id) => {
    try {
        const esquela = esquelaRepository.findByAsignacion(id);
        return (esquela)
    } catch (error) {
        console.error('error al buscar la esquela ', error);
        throw error
    }
   
  };

  const generateEsquelasPDF = async (res) => {
    try {
        const esquelas = await esquelaRepository.getAll();
        const doc = new PDFDocument();
        const escudo = 'src/img/escudo(1).png';
        // Configurar el encabezado de la respuesta para descarga de PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=Esquelas.pdf');

       


        doc.pipe(res);
        esquelas.forEach(esquela => {
           
              // Añadir imagen de fondo más pequeña y más transparente
              const pageWidth = doc.page.width;
              const pageHeight = doc.page.height;
              const bgWidth = 300; // Ancho deseado de la imagen de fondo
              const bgHeight = 300; // Alto deseado de la imagen de fondo
              const bgX = (pageWidth - bgWidth) / 2;
              const bgY = (pageHeight - bgHeight) / 2;
  
              doc.save();
              doc.image(escudo, bgX, bgY, { width: bgWidth, height: bgHeight, opacity: 0.05 });
              doc.restore();
  
              doc.image(escudo, { fit: [57, 57], align: 'left' });      
        doc.fontSize(25).text('UNIDAD EDUCATIVA', { align: 'center' });
        doc.fontSize(25).text('ANTONIVIO AVILA M. ', { align: 'center' });
            doc
                .fontSize(14)
                
                .text(`id ${esquela.idEsquela}`, { align: 'left' })
                .text(`La unidad educativa Antonio Avila, convoca al PP.FF o representante legal del o la estudiante  ${esquela.estudiante.NombreEst} ${esquela.estudiante.ApellidoEst} del Curso : ${esquela.estudiante.curso_idCurso} acuda a la insittucion, el dia : ${esquela.cita}; en aplicacion del Art.13 de la LOEI: en vista que su representando ha presentando las siguientes dificultades :${esquela.Motivo}`, { align: 'left' })
                    .text(`ENVIADO POR EL/LA DOCENTE: ${esquela.docente.user.nombre} ${esquela.docente.user.apellido} DE LA ASIGNATURA DE :${esquela.asigDocenteMaterium.asignatura_idasignatura}`, { align: 'left' })
                

            // Añadir imagen en base64 al PDF
            if (esquela.Evidencia) {
                // Remover prefijo base64 si existe
                const base64Data = esquela.Evidencia.replace(/^data:image\/\w+;base64,/, '');
                const imgBuffer = Buffer.from(base64Data, 'base64');

                // Añadir la imagen al PDF
                try {
                  doc.image(imgBuffer, { fit: [250, 250], align: 'center', valign: 'center' });
                } catch (error) {
                    console.error(`Error adding image for Esquela ID ${esquela.idEsquela}:`, error);
                }
            }

            doc.addPage(); // Crear una nueva página para la siguiente esquela
        });

        doc.end();
    } catch (error) {
        console.error('Error al buscar la esquela', error);
        res.status(500).send('Error al generar el PDF');
    }
};

module.exports={esquelaCreate,getEsquelaByEstudiante,getEsquelaById,getEsquelabyAsignacion,getAll,
    generateEsquelasPDF
}