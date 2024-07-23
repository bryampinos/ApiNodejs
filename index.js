const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const representanteRoutes = require('./src/routes/representanteRoutes')
const estudianteRoutes=require('./src/routes/estudianteRoutes')
const cursoRoutes = require('./src/routes/cursoRoutes')
const atrasoRoutes = require('./src/routes/atrasoRoutes')
const asignaturaRoutes = require('./src/routes/asignaturaRoutes')
const docenteRoutes = require('./src/routes/docenteRoutes')
const esquelaRoutes = require('./src/routes/esquelaRoutes')
const inspectorRoutes = require('./src/routes/inspectorRoutes')
const asignacionDocenteMateria=require('./src/routes/asignacionDocenteMateriaRoutes')
const app = express();
const cors = require('cors');
app.use(cors());
process.env.TZ = 'America/Guayaquil';
app.use(express.json({limit: '500mb'}));
app.use('/representante', representanteRoutes);
app.use('/curso', cursoRoutes);
app.use('/user', userRoutes);
app.use('/estudiante', estudianteRoutes);
app.use('/atraso', atrasoRoutes )
app.use('/asignatura' , asignaturaRoutes)
app.use('/docente' , docenteRoutes)
app.use('/esquela', esquelaRoutes )
app.use('/docenteMateria', asignacionDocenteMateria )
app.use('/inspector', inspectorRoutes )


app.use((err, req, res, next) => {
    console.error(err.stack);
    
    res.status(500).send({ error: 'Algo salió mal' });
  });
  var puerto = 3000;
app.listen(puerto, () => console.log('Zona horaria del servidor:', process.env.TZ,`Servidor corrriendo en el puerto : ${puerto}` ));
