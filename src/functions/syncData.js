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
exports.syncData = void 0;
const getApiData_1 = __importDefault(require("./getApiData"));
const syncData = (urls, models) => __awaiter(void 0, void 0, void 0, function* () {
    const rotations = ['|', '/', '-', '\\'];
    let rotationIndex = 0;
    const rotationInterval = setInterval(() => {
        process.stdout.write(`Sincronizando datos ${rotations[rotationIndex]}\r`);
        rotationIndex = (rotationIndex + 1) % rotations.length;
    }, 100);
    try {
        for (let i = 0; i < urls.length; i++) {
            try {
                yield (0, getApiData_1.default)(urls[i], models[i]);
            }
            catch (error) {
                console.log(error);
            }
            ;
        }
        clearInterval(rotationInterval);
        console.log('Datos obtenidos y actualizados en la base de datos.');
    }
    catch (error) {
        clearInterval(rotationInterval);
        console.log('Error durante la sincronizacion de datos:', error);
    }
});
exports.syncData = syncData;
