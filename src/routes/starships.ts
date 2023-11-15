import { getStarships } from "../controllers/starships";

const starshipsRouter = async (fastify:any) => {
    fastify.get('/starships', getStarships);
}

export default starshipsRouter;