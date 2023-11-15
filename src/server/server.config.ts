import Fastify, { FastifyInstance } from 'fastify';
import routes from '../routes';
import dbConnect from '../database/database.config';


const createServer = (): FastifyInstance => {
    const fastify = Fastify({
        logger: true,
    });

    fastify.register(routes);
    dbConnect();

    return fastify;
};

export default createServer;