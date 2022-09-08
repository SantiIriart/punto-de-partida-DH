const express = require('express');
const app = express();


app.get('/', (req, res) => {
   res.send('Inicio');
});

app.get('/services', (req, res) => {
   res.send('Inicio');
});

app.get('/services/design', (req, res) => {
   res.send('Inicio');
});


app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});