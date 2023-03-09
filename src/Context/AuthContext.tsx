import React, { createContext, ReactNode, useState } from 'react';
import { requestOptions, baseURL } from '../requestConfig';

interface IAuthContext {
  loggedUser: {
    id: number,
    name: string,
    email: string,
    isAdmin: boolean
  },
  userToken: string,
  login(email: string, password: string): Promise<void>,
  logout(): Promise<void>
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext); 

export function AuthProvider({ children }: Props) {

  const [ userToken, setUserToken ] = useState("");
  const [ loggedUser, setLoggedUser ] = useState({
    id: 0,
    name: "",
    email: "",
    isAdmin: false
  })

  const login = async (email: string, password: string) => {
    try {
      requestOptions.method = "POST";
      requestOptions.body = JSON.stringify({email, password})
      const response = await fetch(`${baseURL}/login`, requestOptions);
      const token = await response.json();
      setUserToken(token);
    } catch (error) {
      console.log("ERRO: ", error);
    }
  }

  const logout = async () => {

  }

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout, userToken }}>
       {children} 
    </AuthContext.Provider>
  )
}
