// Controlador de films
import { FastifyRequest, FastifyReply } from 'fastify';
import Film from '../models/Film';

export const getFilms = async (request: FastifyRequest<{ Querystring: { title?: string; director?: string } }>, reply: FastifyReply) => {
    try {
        let query: any = {};

        if (request.query && request.query.title) {
            const titleRegex = new RegExp(request.query.title, 'i');
            query.title = titleRegex;
        }

        if (request.query && request.query.director) {
            const directorRegex = new RegExp(request.query.director, 'i');
            query.director = directorRegex;
        }

        const films = await Film.find(query);

        if (!films || films.length === 0) {
            reply.status(404).send({ message: 'No se encontraron películas.' });
            return;
        }

        reply.send({ count: films.length, data: films });
    } catch (error: any) {
        console.error(error);
        reply.status(500).send({ error: error.message });
    }
};
