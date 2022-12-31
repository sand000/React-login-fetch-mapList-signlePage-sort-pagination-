import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { createContext } from "react";

export const  AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');

    const LoginUser = (email, token) => {
        setEmail(email);
        setToken(token);
        setIsAuth(true);
    }

    const LogoutUser = () =>{
        setEmail('');
        setIsAuth(false);
        setToken(null)
    }

    const ToggleAuth = () => {
        setIsAuth(!isAuth);
    }
    return(
        <Box>
            <AuthContext.Provider value={{LoginUser, ToggleAuth, 
                LogoutUser, 
                email, 
                token, 
                isAuth}}>
                     {children}
            </AuthContext.Provider>
        </Box>
    )
}