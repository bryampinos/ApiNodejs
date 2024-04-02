const express = require('express');
const userRoutes = require('./routes/userRoutes');
const representanteRoutes = require('./routes/representanteRoutes')
const estudianteRoutes=require('./routes/estudianteRoutes')
const cursoRoutes = require('./routes/cursoRoutes')
const app = express();
app.use(express.json());
app.use('/representante', representanteRoutes);
app.use('/curso', cursoRoutes);
app.use('/user', userRoutes);

app.use('/estudiante', estudianteRoutes);



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Algo salió mal' });
  });
app.listen(3000, () => console.log('Server running on port 3000'));
