import { z } from "zod";

const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  id: z.number(),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  media_type: z.string(),
  genre_ids: z.number().array(),
  popularity: z.string(),
  release_date: z.string(),
  video: z.string(),
  vote_average: z.string(),
  vote_count: z.string(),
});

const multipleMoviesSchema = movieSchema.array();

export { movieSchema, multipleMoviesSchema };
