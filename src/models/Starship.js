const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const starshipSchema = new Schema({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: String,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: [
        {
            type: String,
            ref: 'people',
        }
    ],
    films: [
        {
            type: String,
            ref: 'film',
        }
    ],
    created: Date,
    edited: Date,
    url: String
});

const Starship = model('starship', starshipSchema);

module.exports = Starship;