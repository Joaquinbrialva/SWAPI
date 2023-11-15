import { Schema, model } from 'mongoose';

interface IFilm {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

const filmSchema = new Schema<IFilm>({
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

const Film = model<IFilm>('film', filmSchema);

export default Film;