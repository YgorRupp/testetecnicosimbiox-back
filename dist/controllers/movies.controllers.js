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
exports.listMovieDetailController = exports.listMovieSearchController = exports.listMovieController = void 0;
const listMovieService_service_1 = __importDefault(require("../services/listMovieService.service"));
const listMovieSearchService_service_1 = __importDefault(require("../services/listMovieSearchService.service"));
const listMovieDetailService_service_1 = __importDefault(require("../services/listMovieDetailService.service"));
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmYzZjIxMWZlODBiOTBhNDEyY2I1NzA0ZjJiOWRjMSIsInN1YiI6IjY1MTk0MjEwOTY3Y2M3MzQyNDY3MjFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hKSLdSG3y8cC7WAC6aJWxsqW_XrW5S91z-3XNHEokhg";
const listMovieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.params.page);
    const list = yield (0, listMovieService_service_1.default)(page, token);
    return res.status(201).json(list);
});
exports.listMovieController = listMovieController;
const listMovieSearchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const text = req.params.text;
    const listSearch = yield (0, listMovieSearchService_service_1.default)(text, token);
    return res.status(201).json(listSearch);
});
exports.listMovieSearchController = listMovieSearchController;
const listMovieDetailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const movie = yield (0, listMovieDetailService_service_1.default)(id, token);
    return res.status(201).json(movie);
});
exports.listMovieDetailController = listMovieDetailController;
