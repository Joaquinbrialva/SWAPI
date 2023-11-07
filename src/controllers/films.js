const Film = require('../models/Film');

exports.getFilms = async (req, res) => {
    try {
        let query = {};

        if (req.query.title) {
            const titleRegex = new RegExp(req.query.title, 'i');
            query.title = titleRegex;
        }

        if (req.query.director) {
            const directorRegex = new RegExp(req.query.director, 'i');
            query.director = directorRegex;
        }

        const films = await Film.find(query);

        if (!films || films.length === 0) {
            return res.status(404).json({ message: 'No se encontraron películas.' });
        }

        res.status(200).json({ count: films.length, data: films });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
