import { createContext, useContext, useState } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState();
    const [location, setLocation] = useState("GATE");

    const signup = (username) => {
        const mockData = { username: username, token: "Yuh" };
        console.log("got mockData", mockData);
        setToken(mockData.token);
        setLocation("TABLET");
    };

    // TODO: authenticate

    const value = { location, signup };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw Error("useAuth must be used within an AuthProvider");
    return context;
}
