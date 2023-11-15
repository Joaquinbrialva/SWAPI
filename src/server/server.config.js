"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("../routes"));
const database_config_1 = __importDefault(require("../database/database.config"));
const createServer = () => {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    fastify.register(routes_1.default);
    (0, database_config_1.default)();
    return fastify;
};
exports.default = createServer;
