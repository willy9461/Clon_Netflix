import { tmdbAPI, tmdb_paths } from "../../../core/datasource/remote/auth/tmdb/tmdb_api";


export const getPopularMovies = async() => {

    const { data } = await tmdbAPI.get(tmdb_paths.movies.popular);

    console.log("data", data);
    return data;

}; 