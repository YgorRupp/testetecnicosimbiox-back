import { Router } from "express";
import { listMovieDetailController } from "../controllers/movies.controllers";

const movieDetailRoutes: Router = Router();

movieDetailRoutes.get("/:id", listMovieDetailController);

export default movieDetailRoutes;
