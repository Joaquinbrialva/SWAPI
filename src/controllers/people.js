const People = require('../models/People');

exports.getPeople = async (req, res) => {
    try {
        let query = {};

        if (req.query.name) {
            const nameRegex = new RegExp(req.query.name, 'i');
            query.name = nameRegex;
        }

        if (req.query.gender) {
            query.gender = req.query.gender;
        }

        const people = await People.find(query);

        if (!people || people.length === 0) {
            return res.status(404).json({ message: 'No se encontraron personas.' });
        }

        res.status(200).json({ count: people.length, data: people });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};