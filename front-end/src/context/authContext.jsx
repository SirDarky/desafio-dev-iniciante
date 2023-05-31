import { createContext, useContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();
AuthContext.displayName = "UserAuth"

export default function AuthProvider({ children }){
    const [authentication, setAuthentication] = useState(false)
    const [tokenLocal, setTokenLocal] = useState("")
    const [usuario, setUsuario] = useState("")
    const [userId, setUserId] = useState('')

    return(
        <AuthContext.Provider
            value={{authentication, setAuthentication, tokenLocal, setTokenLocal, usuario, setUsuario, userId, setUserId}}
        >
            {children}
        </AuthContext.Provider>
    )
}

//Hook personalizado
export function useAuthContext(){
    const { setAuthentication, setTokenLocal, tokenLocal, authentication, usuario, setUsuario, userId, setUserId } = useContext(AuthContext);
    
    function RealizarNewLoginCliente(data) {
        const token = data.token;
        const usuario = data.usuario.username;
        const id = data.usuario._id;
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("userId", id);
        api.defaults.headers['Authorization'] = `${token}`
        setTokenLocal(localStorage.getItem("token"))
        setAuthentication(true)
        setUsuario(usuario)
        setUserId(id)
    }

    function VerificarAntigoLogin() {
        if(localStorage.getItem("token") && localStorage.getItem("usuario")){
            const token = localStorage.getItem('token')
            const username = localStorage.getItem("usuario")
            const id = localStorage.getItem("userId")
            api.defaults.headers['Authorization'] = `${token}`
            setTokenLocal(token)
            setAuthentication(true)
            setUsuario(username)
            setUserId(id)
            return true
        }
        return false
    }

    function Deslogar() {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token")
            localStorage.removeItem("usuario")
            localStorage.removeItem("userId")
            api.defaults.headers.common['Authorization'] = ``
            setTokenLocal("")
            setUsuario("")
            setAuthentication(false)
            setUserId("")
        }
    }

    function ChecarLogin() {
        if(VerificarAntigoLogin()){
            const objetoLogin = {tokenLocal, authentication, usuario, userId};
            return objetoLogin;
        }else{
            return false;
        }
    }

    return{
        Deslogar,
        VerificarAntigoLogin,
        RealizarNewLoginCliente,
        ChecarLogin,
        authentication,
        usuario,
        tokenLocal,
        userId
    }
}