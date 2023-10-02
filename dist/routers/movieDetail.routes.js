"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_controllers_1 = require("../controllers/movies.controllers");
const movieDetailRoutes = (0, express_1.Router)();
movieDetailRoutes.get("/:id", movies_controllers_1.listMovieDetailController);
exports.default = movieDetailRoutes;
