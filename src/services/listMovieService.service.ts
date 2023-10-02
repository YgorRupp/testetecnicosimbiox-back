import api from "../api/api";
import { AppError } from "../errors";
import { iMovies } from "../interfaces/movie.interface";

const listMoviesService = async (
  page: number,
  token: string
): Promise<iMovies> => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await api.get(
      `https://api.themoviedb.org/3/trending/movie/day?page=${page}`,
      {
        headers,
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new AppError("Erro ao consumir a api", 409);
  }
};

export default listMoviesService;
