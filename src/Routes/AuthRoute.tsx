import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

interface Props {
  Admin: ReactElement;
  Client: ReactElement;
}

export const AuthRoute = ({ Admin, Client } : Props) => {
  const { loggedUser } = useContext(AuthContext);

  if (loggedUser._id !== "") {
    
    if(loggedUser.isAdmin) {
      return Admin;
    } 
    else {
      return Client;
    }
  }
  else {
    alert("Para acessar esta página, faça Login.");
    return <Navigate to='/login' replace />;
  }
};