import z from "zod";
import { movieSchema, multipleMoviesSchema } from "../schemas/movies.schamas";

type iMovies = z.infer<typeof multipleMoviesSchema>;
type iMovie = z.infer<typeof movieSchema>;

export { iMovies, iMovie };
