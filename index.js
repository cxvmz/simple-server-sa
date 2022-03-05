const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res) => {
  res.send('Software Avanzado - Tarea Práctica 5 - 201800580 - Christian Estuardo Mazariegos Rizo')
})

app.listen(port, () => {
  console.log('esta en el puerto  ${port}')
})