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
const axios_1 = __importDefault(require("axios"));
const getApiData = (url, model) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let nextUrl = url;
        while (nextUrl) {
            const response = yield axios_1.default.get(nextUrl);
            const data = response.data.results;
            if (data) {
                for (const item of data) {
                    const existingDoc = yield model.findOne({ url: item.url });
                    if (existingDoc && item.edited !== existingDoc.edited) {
                        yield model.findOneAndUpdate({ url: item.url }, item);
                    }
                    else {
                        const collection = new model(item);
                        yield collection.save();
                    }
                }
                nextUrl = response.data.next;
            }
            else {
                console.log('No se recibio respuesta de SWAPI.');
            }
        }
    }
    catch (error) {
        console.log('Error al obtener datos de la API:', error);
    }
});
exports.default = getApiData;
