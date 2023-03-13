import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '../requestConfig';

interface IAuthContext {
  loggedUser: {
    _id: string,
    name: string,
    email: string,
    isAdmin: boolean
  },
  userToken: string,
  login(email: string, password: string): Promise<void>,
  logout(): void
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext); 

export function AuthProvider({ children }: Props) {

  const navigate = useNavigate();

  const [ userToken, setUserToken ] = useState("");
  const [ loggedUser, setLoggedUser ] = useState({
    _id: "",
    name: "",
    email: "",
    isAdmin: false
  })
  
  const login = async (email: string, password: string) => {
    try {
      const getLogin = await instance.post("/login", {email, password});
      const {user, token} = getLogin.data;
      setUserToken(token);
      if(user) {
        const newUser = {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        }
        setLoggedUser(newUser);
        localStorage.setItem("loggedUser", JSON.stringify(newUser));
        localStorage.setItem("token", JSON.stringify(token));
      }
    } catch (error) {
      console.log("ERRO: ", error);
    }
  }

  const logout = () => {
    setLoggedUser({
      _id: "",
      name: "",
      email: "",
      isAdmin: false
    });
    setUserToken("");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("token");
  }

  useEffect(() => {
    const value = localStorage.getItem("loggedUser");
    if(loggedUser._id === "") {
      value !== null ? setLoggedUser(JSON.parse(value)) : navigate("/login");
    }
  }, [])

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout, userToken }}>
       {children} 
    </AuthContext.Provider>
  )
}
