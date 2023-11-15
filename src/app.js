"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./models/People"));
const Film_1 = __importDefault(require("./models/Film"));
const Starship_1 = __importDefault(require("./models/Starship"));
const Planet_1 = __importDefault(require("./models/Planet"));
const node_cron_1 = __importDefault(require("node-cron"));
const syncData_1 = require("./functions/syncData");
const server_config_1 = __importDefault(require("./server/server.config"));
const fastify = (0, server_config_1.default)();
// Sincronizacion con SWAPI
const urlPeople = 'https://swapi.dev/api/people';
const urlFilm = 'https://swapi.dev/api/films';
const urlPlanet = 'https://swapi.dev/api/planets';
const urlStarship = 'https://swapi.dev/api/starships';
const urls = [urlPeople, urlFilm, urlPlanet, urlStarship];
const models = [People_1.default, Film_1.default, Planet_1.default, Starship_1.default];
// Configuro el cron para que la sincronizacion se haga todos los dias a las 00:00 HS.
node_cron_1.default.schedule('0 0 * * *', () => {
    (0, syncData_1.syncData)(urls, models);
});
fastify.listen({ port: 4000 });
try {
    console.log('Servidor corriendo en el puerto 4000');
}
catch (error) {
    console.error(error);
    process.exit(1);
}
;
