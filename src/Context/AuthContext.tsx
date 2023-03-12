import React, { createContext, ReactNode, useState } from 'react';
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
  logout(): Promise<void>
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext); 

export function AuthProvider({ children }: Props) {

  const [ userToken, setUserToken ] = useState("");
  const [ loggedUser, setLoggedUser ] = useState({
    _id: "",
    name: "",
    email: "",
    isAdmin: false
  })
  
  const login = async (email: string, password: string) => {
    try {
      const getLogin = await instance.post("/login", {email, password})
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
      }
    } catch (error) {
      console.log("ERRO: ", error);
    }
  }

  const logout = async () => {
//em andamento
  }

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout, userToken }}>
       {children} 
    </AuthContext.Provider>
  )
}
