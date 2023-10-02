import { Router } from "express";
import {
  listMovieController,
  listMovieSearchController,
} from "../controllers/movies.controllers";

const moviesRoutes: Router = Router();

moviesRoutes.get("/:page", listMovieController);
moviesRoutes.get("/search/:text", listMovieSearchController);

export default moviesRoutes;
