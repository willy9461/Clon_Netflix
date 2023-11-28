import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";

const LoginView = () => {
  const { login, isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <>
    <article className="article_login">
    <main className="main_login">
      <nav className="nav_login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          width={135}
          height={40}
          alt="logo de netflix"
        />
        <div className="nav_login_select">
        <select name="idioma" id="idioma">
          <option value="español">Español</option>
          <option value="ingles">Inglés</option>
          <option value="portugues">Portugués</option>
        </select>
        <button onClick={login} className="btn_login">Iniciar sesión</button>
        </div>
      </nav>

      <h1 className="h1_login">Películas y series ilimitadas y mucho más</h1>
      <h2 className="h2_login">Disfruta donde quieras. Cancela cuando quieras.</h2>
      <h3 className="h3_login">¿Quieres ver Netlix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía</h3>
      <label htmlFor="email" className="label_login">
        <input type="email" id="email" placeholder="Email" className="input_login" />
        <button className="btn_comenzar">Comenzar</button>
      </label>
    </main>
    </article>
    </>
  );
};

export default LoginView;
