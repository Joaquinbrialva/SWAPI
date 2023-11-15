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
const films_1 = __importDefault(require("./films"));
const people_1 = __importDefault(require("./people"));
const planets_1 = __importDefault(require("./planets"));
const starships_1 = __importDefault(require("./starships"));
function routes(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.register(films_1.default);
        fastify.register(people_1.default);
        fastify.register(planets_1.default);
        fastify.register(starships_1.default);
    });
}
exports.default = routes;
