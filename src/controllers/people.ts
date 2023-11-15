import { FastifyRequest, FastifyReply } from 'fastify'
import People from '../models/People';

export const getPeople = async (request: FastifyRequest<{ Querystring: { name?: string, gender?: string } }>, reply: FastifyReply) => {
    try {
        let query: any = {};

        if (request.query && request.query.name) {
            const nameRegex = new RegExp(request.query.name.toString(), "i");
            query.name = nameRegex;
        }

        if (request.query && request.query.gender) {
            query.gender = request.query.gender;
        }

        const people = await People.find(query);

        if (!people || people.length === 0) {
            reply.code(404).send({ message: "No se encontraron personas." });
            return;
        }

        reply.send({ count: people.length, data: people });
    } catch (error: any) {
        console.error(error);
        reply.code(500).send({ error: error.message });
    }
};