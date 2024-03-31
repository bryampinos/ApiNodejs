const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Algo salió mal' });
  });
app.listen(3000, () => console.log('Server running on port 3000'));
