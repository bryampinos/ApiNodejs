const express = require('express');
const repreRouter = require('./router/repreRouter');

const app = express();
app.use(express.json());
app.use('/representante', repreRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});