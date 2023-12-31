"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const filmSchema = new mongoose_1.Schema({
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
const Film = (0, mongoose_1.model)('film', filmSchema);
exports.default = Film;
