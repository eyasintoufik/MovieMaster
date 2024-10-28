import { Request, Response } from "express";
import { MovieServices } from "./movies.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie is Created successfully!",
    data: result,
  });
};
const getAllMovie = async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMovie();
  res.json({
    success: true,
    message: "Movie is find successfully!",
    data: result,
  });
};
const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieServices.getMovieBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

export const MovieController = {
  createMovie,
  getAllMovie,
  getMovieBySlug,
};
