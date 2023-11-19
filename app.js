const express = require("express");
const { log } = require("node:console");
const path = require("node:path");

const rutaHome = require('./routes/home');
const rutaOfertas = require('./routes/ofertas');

const app = express();


// Definimos la carpeta Publica
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Levantar el servidor en un puerto
app.listen(3000, () => {
  console.log("Servidor en línea en el puerto 3000");
});


app.get('/', rutaHome);

app.get('/ofertas', rutaOfertas);






