const Starship = require('../models/Starship');

exports.getStarships = async (req, res) => {
    try {
        let query = {};

        if (req.query.name) {
            const nameRegex = new RegExp(req.query.name, 'i');
            query.name = nameRegex;
        }

        if (req.query.model) {
            const modelRegex = new RegExp(req.query.model, 'i');
            query.model = modelRegex;
        }

        if (req.query.manufacturer) {
            const manufacturerRegex = new RegExp(req.query.manufacturer, 'i');
            query.manufacturer = manufacturerRegex;
        }

        if (req.query.cost_in_credits) {
            query.cost_in_credits = req.query.cost_in_credits;
        }

        if (req.query.length) {
            query.length = req.query.length;
        }

        if (req.query.crew) {
            query.crew = req.query.crew;
        }

        if (req.query.passengers) {
            query.passengers = req.query.passengers;
        }

        if (req.query.consumables) {
            query.consumables = req.query.consumables;
        }

        if (req.query.starship_class) {
            const starshipClassRegex = new RegExp(req.query.starship_class, 'i');
            query.starship_class = starshipClassRegex;
        }

        const starships = await Starship.find(query);

        if (!starships || starships.length === 0) {
            return res.status(404).json({ message: 'No se encontraron naves espaciales.' });
        }

        res.status(200).json({ count: starships.length, data: starships });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
