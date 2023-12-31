"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStarships = void 0;
const Starship_1 = __importDefault(require("../models/Starship"));
const getStarships = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (request.query && request.query.name) {
            const nameRegex = new RegExp(request.query.name.toString(), 'i');
            query.name = nameRegex;
        }
        if (request.query && request.query.model) {
            const modelRegex = new RegExp(request.query.model.toString(), 'i');
            query.model = modelRegex;
        }
        debugger;
        if (request.query && request.query.manufacturer) {
            const manufacturerRegex = new RegExp(request.query.manufacturer.toString(), 'i');
            query.manufacturer = manufacturerRegex;
        }
        if (request.query && request.query.cost_in_credits) {
            query.cost_in_credits = request.query.cost_in_credits;
        }
        if (request.query && request.query.length) {
            query.length = request.query.length;
        }
        if (request.query && request.query.crew) {
            query.crew = request.query.crew;
        }
        if (request.query && request.query.passengers) {
            query.passengers = request.query.passengers;
        }
        if (request.query && request.query.starship_class) {
            const starshipClassRegex = new RegExp(request.query.starship_class.toString(), 'i');
            query.starship_class = starshipClassRegex;
        }
        const starships = yield Starship_1.default.find(query);
        if (!starships || starships.length === 0) {
            reply.code(404).send({ message: 'No se encontraron naves espaciales.' });
            return;
        }
        reply.send({ count: starships.length, data: starships });
    }
    catch (error) {
        console.error(error);
        reply.code(500).send({ error: error.message });
    }
});
exports.getStarships = getStarships;
