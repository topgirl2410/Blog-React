import { createContext, useState, useEffect } from "react"

import axios from 'axios'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));


    const login = async (inputs) => {
        const res = await axios.post("http://localhost:4000/api/auth/login", inputs);
        setCurrentUser(res.data)
    };

    const logout = async (inputs) => {
        const res = await axios.post("http://localhost:4000/api/auth/logout", inputs);
        setCurrentUser(null)
    };


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}