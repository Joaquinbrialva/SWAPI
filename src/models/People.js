"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const peopleSchema = new mongoose_1.Schema({
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
});
const People = (0, mongoose_1.model)('people', peopleSchema);
exports.default = People;
