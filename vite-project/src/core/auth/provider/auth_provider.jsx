import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context"

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const saveLoginState = (state) => localStorage.getItem(isLoggedIn)




    useEffect(() => {

        const initAuth = async () => {};

        initAuth();

    }, [])

    const login = () => {
        setIsLoggedIn(true); 
    };

    const logout = () => {
        setIsLoggedIn(false);
    };


    return <AuthContext.Provider value={{
        isLoggedIn,
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
} 