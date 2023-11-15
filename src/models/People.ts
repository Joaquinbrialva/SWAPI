import { Schema, model } from 'mongoose';

interface IPeople {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

const peopleSchema = new Schema<IPeople>({
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

const People = model<IPeople>('people', peopleSchema);

export default People;