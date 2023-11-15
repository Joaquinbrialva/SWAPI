import People from './models/People';
import Film from './models/Film';
import Starship from './models/Starship';
import Planet from './models/Planet';
import cron from 'node-cron';
import { syncData } from './functions/syncData';
import { Model } from 'mongoose';
import createServer from './server/server.config';

const fastify = createServer();

// Sincronizacion con SWAPI
const urlPeople: string = 'https://swapi.dev/api/people';
const urlFilm: string = 'https://swapi.dev/api/films';
const urlPlanet: string = 'https://swapi.dev/api/planets';
const urlStarship: string = 'https://swapi.dev/api/starships';

const urls: string[] = [urlPeople, urlFilm, urlPlanet, urlStarship];
const models: Model<any>[] = [People, Film, Planet, Starship];

// Configuro el cron para que la sincronizacion se haga todos los dias a las 00:00 HS.
cron.schedule('0 0 * * *', () => {
    syncData(urls, models);
});

fastify.listen({ port: 4000 })
try {
    console.log('Servidor corriendo en el puerto 4000');
} catch (error) {
    console.error(error);
    process.exit(1);
};
