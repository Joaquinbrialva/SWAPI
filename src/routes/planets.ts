import { getPlanets } from "../controllers/planets";

const planetsRouter = async (fastify: any) => {
    fastify.get('/planets', getPlanets);
}

export default planetsRouter;