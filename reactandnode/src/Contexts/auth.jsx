import React, {useState, createContext, useEffect} from "react";
import {json, Navigate, useNavigate} from "react-router-dom"

export const AuthContext = createContext();



export const AuthProvider = ({children}) =>{
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        const recovedUser = localStorage.getItem('user');

        if(recovedUser){
            setUser(JSON.parse(recovedUser));
        }

        setLoading(false)
    }, [])
    
    const login = (email, password) =>{
        console.log('login auth', {email, password});

        //api creating an session
        const loggedUser = {
            id: '123',
            email,
        }

        localStorage.setItem('user', JSON.stringify(loggedUser))



        if (password === String || Number){
        setUser(loggedUser);
        navigate("/")

        }
     
    };

    const logout = () =>{
        console.log('logout')
        localStorage.removeItem('user')
        setUser(null)
        navigate("/login")
    }
    return (
        <AuthContext.Provider 
        value={{authenticated : !!user, user,loading, login, logout }}>
            {children}
            </AuthContext.Provider>
    )
};