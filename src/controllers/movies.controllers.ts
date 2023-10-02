import { Request, Response } from "express";
import listMoviesService from "../services/listMovieService.service";
import listMovieSearchService from "../services/listMovieSearchService.service";
import listMovieDetailService from "../services/listMovieDetailService.service";
import "dotenv/config";

// const token2: string =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmYzZjIxMWZlODBiOTBhNDEyY2I1NzA0ZjJiOWRjMSIsInN1YiI6IjY1MTk0MjEwOTY3Y2M3MzQyNDY3MjFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hKSLdSG3y8cC7WAC6aJWxsqW_XrW5S91z-3XNHEokhg";
const token: string = process.env.TOKEN!;

const listMovieController = async (req: Request, res: Response) => {
  const page: number = parseInt(req.params.page);

  const list = await listMoviesService(page, token);

  return res.status(201).json(list);
};
const listMovieSearchController = async (req: Request, res: Response) => {
  const text: string = req.params.text;

  const listSearch = await listMovieSearchService(text, token);

  return res.status(201).json(listSearch);
};
const listMovieDetailController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const movie = await listMovieDetailService(id, token);

  return res.status(201).json(movie);
};

export {
  listMovieController,
  listMovieSearchController,
  listMovieDetailController,
};
