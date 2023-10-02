"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controllers_1 = require("../controllers/movies.controllers");
const moviesRoutes = (0, express_1.Router)();
moviesRoutes.get("/:page", movies_controllers_1.listMovieController);
moviesRoutes.get("/search/:text", movies_controllers_1.listMovieSearchController);
exports.default = moviesRoutes;
