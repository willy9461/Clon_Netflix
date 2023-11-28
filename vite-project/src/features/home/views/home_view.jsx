import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import { AppSwipper } from "../../../core/components/app_swiper/app_swipper";
import useSWR from "swr";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularTv,
  getTopRatedTv,
} from "../services/movies.services";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";

const HomeView = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR("getPopularMovies", getPopularMovies);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useSWR("getTopRatedMovies", getTopRatedMovies);

  const {
    data: UpcomingMovies,
    error: UpcomingMoviesError,
    isLoading: UpcomingMoviesIsLoading,
  } = useSWR("getUpcomingMovies", getUpcomingMovies);

  const {
    data: popularTv,
    error: popularTvError,
    isLoading: popularTvIsLoading,
  } = useSWR("getPopularTv", getPopularTv);

  const {
    data: topRatedTv,
    error: topRatedTvError,
    isLoading: topRatedTvIsLoading,
  } = useSWR("getTopRatedTv", getTopRatedTv);

  const { isLoggedIn, login, logout } = useAuth();

  console.log(popularMovies);

  return (
    <>
      <main className="main_home">
        <header className="header_home">
          <nav className="nav_home">
            
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' width={100} height={30} alt="logo de netflix" />
            <ul className="nav_list">
              <li className="nav_item">Inicio</li>
              <li className="nav_item">Series</li>
              <li className="nav_item">Peliculas</li>
              <li className="nav_item">Novedades populares</li>
              <li className="nav_item">Mi lista</li>
              <li className="nav_item">Explora por idiomas</li>
            </ul>
          
            
            <ul className="nav_buttons_list">
              <li className="nav_buttons">Buscar</li>
              <li className="nav_buttons">Niños</li>
              <li className="nav_buttons">Notificaciones</li>
              <button onClick={logout}>Cerrar sesión</button>
              
            </ul>
          
          </nav>
         
          
        </header>

        <AppCarouselSection
          title={"Peliculas más populares"}
          data={popularMovies}
        />
        <AppCarouselSection title={"Tendencias"} data={topRatedMovies} />
        <AppCarouselSection
          title={"Nuevos lanzamientos"}
          data={UpcomingMovies}
        />
        <AppCarouselSection title={"Series más populares"} data={popularTv} />
        <AppCarouselSection title={"Series mejor puntadas"} data={topRatedTv} />
      </main>
    </>
  );
};

export default HomeView;
