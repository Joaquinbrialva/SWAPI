const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const peopleSchema = Schema({
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    films: [
        {
            type: String,
            ref: 'film',
        }
    ],
    species: [
        {
            type: String,
            ref: 'specie',
        }
    ],
    vehicles: [
        {
            type: String,
            ref: 'vehicle',
        }
    ],
    starships: [
        {
            type: String,
            ref: 'starship',
        }
    ],
    created: Date,
    edited: Date,
    url: String
})

const People = model('people', peopleSchema);

module.exports = People;