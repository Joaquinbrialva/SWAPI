import { Schema, model } from 'mongoose';

interface IPlanet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}

const planetSchema = new Schema<IPlanet>({
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

const Planet = model<IPlanet>('planet', planetSchema);

export default Planet;