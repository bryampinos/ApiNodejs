const express = require('express');
const userRoutes = require('./routes/userRoutes');
const representanteRoutes = require('./routes/representanteRoutes')
const estudianteRoutes=require('./routes/estudianteRoutes')
const cursoRoutes = require('./routes/cursoRoutes')
const atrasoRoutes = require('./routes/atrasoRoutes')
const asignaturaRoutes = require('./routes/asignaturaRoutes')
const docenteRoutes = require('./routes/docenteRoutes')
const esquelaRoutes = require('./routes/esquelaRoutes')
const asignacionDocenteMateria=require('./routes/asignacionDocenteMateriaRoutes')
const app = express();
const cors = require('cors');
app.use(cors());
process.env.TZ = 'America/Guayaquil';

app.use(express.json({limit: '500mb'}));
app.use('/user', userRoutes);
app.use('/representante', representanteRoutes);
app.use('/curso', cursoRoutes);
app.use('/estudiante', estudianteRoutes);
app.use('/atraso', atrasoRoutes )
app.use('/asignatura' , asignaturaRoutes)
app.use('/docente' , docenteRoutes)
app.use('/esquela', esquelaRoutes )
app.use('/docenteMateria', asignacionDocenteMateria )




app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).send({ error: 'Algo salió mal' });
});


// Configuración del servidor para escuchar en todas las interfaces de red
const PORT = 3000;  // Puedes cambiar el puerto si es necesario
const HOST = '0.0.0.0'; // Escucha en todas las interfaces de red
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log('Zona horaria del servidor:', process.env.TZ);
});