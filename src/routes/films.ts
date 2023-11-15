import { getFilms } from '../controllers/films';

const filmsRouter = async (fastify: any) => {
    fastify.get('/films', getFilms)
}

export default filmsRouter;