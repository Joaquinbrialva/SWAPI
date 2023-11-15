"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const planetSchema = new mongoose_1.Schema({
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    residents: [
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
const Planet = (0, mongoose_1.model)('planet', planetSchema);
exports.default = Planet;
