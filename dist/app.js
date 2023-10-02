"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const errors_1 = require("./errors");
const movieDetail_routes_1 = __importDefault(require("./routers/movieDetail.routes"));
const movies_routes_1 = __importDefault(require("./routers/movies.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/movies", movies_routes_1.default);
app.use("/movie", movieDetail_routes_1.default);
app.use(errors_1.handleErrors);
exports.default = app;
