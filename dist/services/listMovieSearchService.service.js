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
const api_1 = __importDefault(require("../api/api"));
const errors_1 = require("../errors");
const listMovieSearchService = (text, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = yield api_1.default.get(`https://api.themoviedb.org/3/search/movie?query=${text}`, {
            headers,
        });
        const data = response.data;
        return data;
    }
    catch (error) {
        console.log(error);
        throw new errors_1.AppError("Erro ao consumir a api", 409);
    }
});
exports.default = listMovieSearchService;
