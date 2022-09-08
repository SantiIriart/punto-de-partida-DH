const express = require('express');
const app = express();


app.get('/', (req, res) => {
   res.status(200).json({
      ok: true,
      msg: 'Inicio'
   });
});

app.get('/services', (req, res) => {
   res.status(200).json({
      ok: true,
      msg: 'Services'
   });
});

app.get('/services/design', (req, res) => {
   res.status(200).json({
      ok: true,
      msg: 'Design'
   });
});


app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});