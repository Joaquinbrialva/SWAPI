import { Schema, model } from 'mongoose';

interface IPilot {
    type: string;
    ref: string;
}

interface IFilm {
    type: string;
    ref: string;
}

interface IStarship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: IPilot[];
    films: IFilm[];
    created: Date;
    edited: Date;
    url: string;
}

const starshipSchema = new Schema<IStarship>({
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

const Starship = model<IStarship>('starship', starshipSchema);

export default Starship;