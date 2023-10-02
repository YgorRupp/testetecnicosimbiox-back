"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleMoviesSchema = exports.movieSchema = void 0;
const zod_1 = require("zod");
const movieSchema = zod_1.z.object({
    adult: zod_1.z.boolean(),
    backdrop_path: zod_1.z.string(),
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    original_language: zod_1.z.string(),
    original_title: zod_1.z.string(),
    overview: zod_1.z.string(),
    poster_path: zod_1.z.string(),
    media_type: zod_1.z.string(),
    genre_ids: zod_1.z.number().array(),
    popularity: zod_1.z.string(),
    release_date: zod_1.z.string(),
    video: zod_1.z.string(),
    vote_average: zod_1.z.string(),
    vote_count: zod_1.z.string(),
});
exports.movieSchema = movieSchema;
const multipleMoviesSchema = movieSchema.array();
exports.multipleMoviesSchema = multipleMoviesSchema;
