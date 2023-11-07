const express = require('express');
const mongoose = require('mongoose');
const { syncData } = require('./src/syncData');
const People = require('./src/models/People');
const Film = require('./src/models/Film');
const Starship = require('./src/models/Starship');
const Planet = require('./src/models/Planet');
const cron = require('node-cron');
const indexRouter = require('./src/routes/index');
const app = express();

const port = process.env.PORT || 4000;

// Conexion de base de datos a Mongo
mongoose.connect('mongodb://localhost:27017/starwars')
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

app.use('/', indexRouter);

const urlPeople = 'https://swapi.dev/api/people'
const urlFilm = 'https://swapi.dev/api/films'
const urlPlanet = 'https://swapi.dev/api/planets'
const urlStarship = 'https://swapi.dev/api/starships'

const urls = [
    urlPeople,
    urlFilm,
    urlPlanet,
    urlStarship
];

const models = [People, Film, Planet, Starship];

// Configuro el cron para que la sincronizacion se haga todos los dias a las 00:00 HS.
cron.schedule('0 0 * * *', () => {
    syncData(urls, models);
});