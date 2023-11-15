import { FastifyRequest, FastifyReply } from 'fastify';
import Starship from '../models/Starship';

export const getStarships = async (request: FastifyRequest<{ Querystring: { name?: string, model?: string, manufacturer?: string, cost_in_credits?: string, length?: string, crew?: string, passengers?: string, consumables?: string, starship_class?: string } }>, reply: FastifyReply) => {
    try {
        let query: any = {};

        if (request.query && request.query.name) {
            const nameRegex = new RegExp(request.query.name.toString(), 'i');
            query.name = nameRegex;
        }

        if (request.query && request.query.model) {
            const modelRegex = new RegExp(request.query.model.toString(), 'i');
            query.model = modelRegex;
        }
        debugger;
        if (request.query && request.query.manufacturer) {
            const manufacturerRegex = new RegExp(request.query.manufacturer.toString(), 'i');
            query.manufacturer = manufacturerRegex;
        }

        if (request.query && request.query.cost_in_credits) {
            query.cost_in_credits = request.query.cost_in_credits;
        }

        if (request.query && request.query.length) {
            query.length = request.query.length;
        }

        if (request.query && request.query.crew) {
            query.crew = request.query.crew;
        }

        if (request.query && request.query.passengers) {
            query.passengers = request.query.passengers;
        }

        if (request.query && request.query.starship_class) {
            const starshipClassRegex = new RegExp(request.query.starship_class.toString(), 'i');
            query.starship_class = starshipClassRegex;
        }

        const starships = await Starship.find(query);

        if (!starships || starships.length === 0) {
            reply.code(404).send({ message: 'No se encontraron naves espaciales.' });
            return;
        }

        reply.send({ count: starships.length, data: starships });
    } catch (error: any) {
        console.error(error);
        reply.code(500).send({ error: error.message });
    }
};