// src/routes/index.ts
import { FastifyInstance } from 'fastify';
import filmsRouter from './films';
import peopleRouter from './people';
import planetsRouter from './planets';
import starshipsRouter from './starships';

async function routes(fastify: FastifyInstance) {
    fastify.register(filmsRouter);
    fastify.register(peopleRouter);
    fastify.register(planetsRouter);
    fastify.register(starshipsRouter);
}

export default routes;