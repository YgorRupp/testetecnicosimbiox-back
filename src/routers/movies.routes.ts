import { Router } from "express";
import {
  listMovieController,
  listMovieSearchController,
} from "../controllers/movies.controllers";

const moviesRoutes: Router = Router();

moviesRoutes.get("/search/:text", listMovieSearchController);
moviesRoutes.get("/:page", listMovieController);

export default moviesRoutes;
