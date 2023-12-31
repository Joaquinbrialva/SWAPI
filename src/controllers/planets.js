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
exports.getPlanets = void 0;
const Planet_1 = __importDefault(require("../models/Planet"));
const getPlanets = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (request.query && request.query.name) {
            const nameRegex = new RegExp(request.query.name.toString(), 'i');
            query.name = nameRegex;
        }
        if (request.query && request.query.climate) {
            const climateRegex = new RegExp(request.query.climate.toString(), 'i');
            query.climate = climateRegex;
        }
        if (request.query && request.query.terrain) {
            const terrainRegex = new RegExp(request.query.terrain.toString(), 'i');
            query.terrain = terrainRegex;
        }
        if (request.query && request.query.population) {
            const populationRegex = new RegExp(request.query.population.toString(), 'i');
            query.population = populationRegex;
        }
        if (request.query && request.query.diameter) {
            const diameterRegex = new RegExp(request.query.diameter.toString(), 'i');
            query.diameter = diameterRegex;
        }
        const planets = yield Planet_1.default.find(query);
        if (!planets || planets.length === 0) {
            reply.code(404).send({ message: 'No se encontraron planetas.' });
            return;
        }
        reply.send({ count: planets.length, data: planets });
    }
    catch (error) {
        console.error(error);
        reply.code(500).send({ error: error.message });
    }
});
exports.getPlanets = getPlanets;
