import { FastifyRequest, FastifyReply } from 'fastify';
import Planet from '../models/Planet';

export const getPlanets = async (request: FastifyRequest<{ Querystring: { name?: string, climate?: string, terrain?: string, population?: string, diameter?: string } }>, reply: FastifyReply) => {
    try {
        let query: any = {};

        if (request.query && request.query.name) {
            const nameRegex = new RegExp(request.query.name.toString(), 'i');
            query.name = nameRegex;
        }

        if (request.query && request.query.climate) {
            const climateRegex = new RegExp(request.query.climate.toString(), 'i');
            query.climate = climateRegex;
        }

        if (request.query && request.query.terrain) {
            const terrainRegex = new RegExp(request.query.terrain.toString(), 'i');
            query.terrain = terrainRegex;
        }

        if (request.query && request.query.population) {
            const populationRegex = new RegExp(request.query.population.toString(), 'i');
            query.population = populationRegex;
        }

        if (request.query && request.query.diameter) {
            const diameterRegex = new RegExp(request.query.diameter.toString(), 'i');
            query.diameter = diameterRegex;
        }

        const planets = await Planet.find(query);

        if (!planets || planets.length === 0) {
            reply.code(404).send({ message: 'No se encontraron planetas.' });
            return;
        }

        reply.send({ count: planets.length, data: planets });
    } catch (error: any) {
        console.error(error);
        reply.code(500).send({ error: error.message });
    }
}