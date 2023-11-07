const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const filmSchema = new Schema({
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [
        {
            type: String,
            ref: 'people',
        }
    ],
    planets: [
        {
            type: String,
            ref: 'planet',
        }
    ],
    starships: [
        {
            type: String,
            ref: 'starship',
        }
    ],
    vehicles: [
        {
            type: String,
            ref: 'vehicle',
        }
    ],
    species: [
        {
            type: String,
            ref: 'species',
        }
    ],
    created: Date,
    edited: Date,
    url: String
});

const Film = model('film', filmSchema);

module.exports = Film;