import { createContext, useContext, useState } from "react";
import TrySignup from "./use-cases/TrySignup";
import constants from "./constants";
import TryAuthenticate from "./use-cases/TryAuthenticate";

const bestPassword = "1234";
const AuthContext = createContext();
const trySignup = new TrySignup({
    apiBase: constants.api.base,
    endpoint: constants.api.signup,
});
const tryAuthenticate = new TryAuthenticate({
    apiBase: constants.api.base,
    endpoint: constants.api.authenticate,
});

export function AuthProvider({ children }) {
    const [token, setToken] = useState();
    const [location, setLocation] = useState(constants.locations.entrance);
    const [d20Roll, setD20Roll] = useState(0);
    const signupAsync = async (username) => {
        const responseToken = await trySignup.runAsync({
            username: username,
            password: bestPassword,
        });
        console.log("response token:", responseToken);
        setToken(responseToken);
        setLocation(constants.locations.tablet);
    };

    const authenticateAsync = async () => {
        const { success, roll } = await tryAuthenticate.runAsync({
            token: token,
        });
        setD20Roll(roll);
        console.log(success);
        if (success === true) {
            setLocation(constants.locations.tunnel);
            return;
        }
        setLocation(constants.locations.dungeon);
    };

    const value = { location, signupAsync, token, authenticateAsync, d20Roll };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw Error("useAuth must be used within an AuthProvider");
    return context;
}
