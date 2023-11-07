const Planet = require('../models/Planet');

exports.getPlanets = async (req, res) => {
    try {

        let query = {};

        if (req.query.name) {
            const nameRegex = new RegExp(req.query.name, 'i');
            query.name = nameRegex;
        }

        if (req.query.climate) {
            const climateRegex = new RegExp(req.query.climate, 'i');
            query.climate = climateRegex;
        }

        if (req.query.terrain) {
            const terrainRegex = new RegExp(req.query.terrain, 'i');
            query.terrain = terrainRegex;
        }

        if (req.query.population) {
            const populationRegex = new RegExp(req.query.population, 'i');
            query.population = populationRegex;
        }

        if (req.query.diameter) {
            const diameterRegex = new RegExp(req.query.diameter, 'i');
            query.diameter = diameterRegex;
        }

        const planets = await Planet.find(query);

        if (!planets || planets.length === 0) {
            return res.status(404).json({ message: 'No se encontraron planetas.' });
        }

        res.status(200).json({ count: planets.length, data: planets });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
