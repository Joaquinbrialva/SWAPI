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
exports.getFilms = void 0;
const Film_1 = __importDefault(require("../models/Film"));
const getFilms = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (request.query && request.query.title) {
            const titleRegex = new RegExp(request.query.title, 'i');
            query.title = titleRegex;
        }
        if (request.query && request.query.director) {
            const directorRegex = new RegExp(request.query.director, 'i');
            query.director = directorRegex;
        }
        const films = yield Film_1.default.find(query);
        if (!films || films.length === 0) {
            reply.status(404).send({ message: 'No se encontraron películas.' });
            return;
        }
        reply.send({ count: films.length, data: films });
    }
    catch (error) {
        console.error(error);
        reply.status(500).send({ error: error.message });
    }
});
exports.getFilms = getFilms;
