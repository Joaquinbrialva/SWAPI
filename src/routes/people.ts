import { getPeople } from '../controllers/people';

const peopleRouter = async (fastify: any) => {
    fastify.get('/people', getPeople);
}

export default peopleRouter;