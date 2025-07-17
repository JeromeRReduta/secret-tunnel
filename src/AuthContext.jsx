import { createContext, useContext, useState } from "react";
import TrySignup from "./use-cases/TrySignup";
import constants from "./constants";

const bestPassword = "1234";

const AuthContext = createContext();

const trySignup = new TrySignup({
    apiBase: constants.api.base,
    endpoint: constants.api.signup,
});
export function AuthProvider({ children }) {
    const [token, setToken] = useState();
    const [location, setLocation] = useState(constants.locations.entrance);

    const signupAsync = async (username) => {
        const responseToken = await trySignup.runAsync({
            username: username,
            password: bestPassword,
        });
        console.log("response token:", responseToken);
        setToken(responseToken);
        setLocation(constants.locations.tablet);
    };

    // TODO: authenticate

    const value = { location, signupAsync, token };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw Error("useAuth must be used within an AuthProvider");
    return context;
}
