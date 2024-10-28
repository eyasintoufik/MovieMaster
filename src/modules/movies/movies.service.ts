import { TMovie } from "./movies.interface";
import { Movie } from "./movies.model";

const createMovie = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};
const getAllMovie = async () => {
  const result = await Movie.find();
  return result;
};
const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};
export const MovieServices = {
  createMovie,
  getAllMovie,
  getMovieBySlug,
};
