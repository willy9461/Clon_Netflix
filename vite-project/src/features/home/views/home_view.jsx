import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import { AppSwipper } from "../../../core/components/app_swiper/app_swipper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swipper_slide";
import { getPopularMovies } from "../services/movies.services";

const HomeView = () => {
  const { isLoggedIn, login, logout } = useAuth();

  console.log("isLoggedIn", isLoggedIn);

  getPopularMovies();
  return (
    <>
      <h1>
        Bienvenido de nuevo a <span style={{ color: "red" }}>Netflix</span>
      </h1>
      <button onClick={logout}>Cerrar sesión</button>

      <div>
        <h1>Peliculas mas vistas</h1>
        <AppSwipper>
          {Array.from({ length: 10 }).map((_, index) => (
            <AppSwiperSlide key={index}>
              <div
                style={{
                  width: "250px",
                  height: "150px",
                  background: "red",
                }}
              >
                <h3>{index +1}</h3>
              </div>
            </AppSwiperSlide>
          ))}
        </AppSwipper>
      </div>
      <div>
        <h1>Series mas vistas</h1>
        <AppSwipper>
          {Array.from({ length: 10 }).map((_, index) => (
            <AppSwiperSlide key={index}>
              <div
                style={{
                  width: "250px",
                  height: "150px",
                  background: "red",
                }}
              >
                <h3>{index +1}</h3>
              </div>
            </AppSwiperSlide>
          ))}
        </AppSwipper>
      </div>
      <div>
        <h1>Peliculas mejor puntuadas</h1>
        <AppSwipper>
          {Array.from({ length: 10 }).map((_, index) => (
            <AppSwiperSlide key={index}>
              <div
                style={{
                  width: "250px",
                  height: "150px",
                  background: "red",
                }}
              >
                <h3>{index +1}</h3>
              </div>
            </AppSwiperSlide>
          ))}
        </AppSwipper>
      </div>
    </>
  );
};

export default HomeView;
