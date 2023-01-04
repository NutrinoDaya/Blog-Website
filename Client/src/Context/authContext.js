import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AuthContext = createContext();

export const AuthContextProvider = ( {children}) =>{
    const [currUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    console.log("current user : " )
    console.log(currUser)

    const login = async(inputs)=>{
    const res = await axios.post("/auth/login",inputs)
    setCurrentUser(res.data);
    };


    const logout = async(inputs)=>{
        await axios.post("/auth/logout")
        setCurrentUser(null);
        window.location.reload();

    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currUser))
    },[currUser])
    return (
        <AuthContext.Provider value={{currUser,login,logout}}>{children}</AuthContext.Provider>
    )
}