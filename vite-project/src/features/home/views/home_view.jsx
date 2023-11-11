import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const HomeView = () => {

  const { isLoggedIn, login, logout } = useAuth();

  console.log('isLoggedIn',isLoggedIn);
  return (
    <>
    <h1>Bienvenido de nuevo a <span style={{color:"red"}}>Netflix</span></h1>
    <button onClick={logout}>Cerrar sesión</button>
    </>
  )
};

export default HomeView;
