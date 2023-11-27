import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context"

export const AUTH_KEY = 'isLoggedIn';

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const saveLoginState = (isLoggedIn) => localStorage.setItem(AUTH_KEY, isLoggedIn);
    const getLoginState = () => localStorage.getItem(AUTH_KEY);
    const removeLoginState = () => localStorage.removeItem(AUTH_KEY);




    useEffect(() => {

        const initAuth = async () => {

            const logginState = getLoginState();

            if (!logginState) return;
            setIsLoggedIn(logginState); 

        };

        initAuth();

    }, [])

    const login = () => {
        setIsLoggedIn(true); 
        saveLoginState(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        removeLoginState();
    };


    return <AuthContext.Provider value={{
        isLoggedIn,
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
} 