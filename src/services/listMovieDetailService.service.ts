import api from "../api/api";
import { AppError } from "../errors";
import { iMovie } from "../interfaces/movie.interface";

const listMovieDetailService = async (
  id: number,
  token: string
): Promise<iMovie> => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new AppError("Erro ao consumir a api", 409);
  }
};

export default listMovieDetailService;
