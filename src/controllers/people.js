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
exports.getPeople = void 0;
const People_1 = __importDefault(require("../models/People"));
const getPeople = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (request.query && request.query.name) {
            const nameRegex = new RegExp(request.query.name.toString(), "i");
            query.name = nameRegex;
        }
        if (request.query && request.query.gender) {
            query.gender = request.query.gender;
        }
        const people = yield People_1.default.find(query);
        if (!people || people.length === 0) {
            reply.code(404).send({ message: "No se encontraron personas." });
            return;
        }
        reply.send({ count: people.length, data: people });
    }
    catch (error) {
        console.error(error);
        reply.code(500).send({ error: error.message });
    }
});
exports.getPeople = getPeople;
