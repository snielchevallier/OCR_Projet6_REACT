import { createContext, useContext, useState, useEffect } from "react";
import {connexionSuccess, connexionFail} from "../data/connexion";
import {userInfo} from "../data/userInfo";
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userInfos, setUserInfos] = useState(null);
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
            setUserInfos(userInfo);
            console.log("User Info in AuthProvider:", userInfo); // Debugging line
        }else{
            setUserInfos(null);
            setLoading(false);
        }
    }, []);

    const login = (login, password) => {
        // Simulate API call
        const userData = { email: login, password: password };
        const response = connexionSuccess; // Change to connexionFail to test failure case
        if (response.token) {
            setError(null);
            setUser(response.userId);
            setToken(response.token);
            localStorage.setItem("user", JSON.stringify(response.userId));
            setUserInfos(userInfo);
            return true;
        } else {
            setError(connexionFail.message);
            console.error("Login failed:", response.message);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setError(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading, error, userInfos }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);