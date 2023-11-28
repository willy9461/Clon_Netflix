import {
  tmdbAPI,
  tmdb_paths,
} from "../../../core/datasource/remote/auth/tmdb/tmdb_api";
import { tmdbMoviesTvAdapter } from "./adapters/tmdb.dapters";


export const getPopularMovies = async () => {
  const { data } = await tmdbAPI.get(tmdb_paths.movies.popular);
 
  return tmdbMoviesTvAdapter(data);
 
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdbAPI.get(tmdb_paths.movies.top_rated);
  return tmdbMoviesTvAdapter(data);
}

export const getUpcomingMovies = async () => {
  const { data } = await tmdbAPI.get(tmdb_paths.movies.upcoming);
  return tmdbMoviesTvAdapter(data);
}

export const getPopularTv = async () => {
  const { data } = await tmdbAPI.get(tmdb_paths.tv.popular);
  return tmdbMoviesTvAdapter(data);
}

export const getTopRatedTv = async () => {
  const { data } = await tmdbAPI.get(tmdb_paths.tv.top_rated);
  return tmdbMoviesTvAdapter(data);
}
