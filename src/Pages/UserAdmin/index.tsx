import { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { IUser } from '../../interfaces';
import { instance } from '../../requestConfig';

import { StyleUserAdmin } from './styles';

export default function UserAdmin() {

  const { state } = useLocation();
  const navigate = useNavigate();
  const { userToken } = useContext(AuthContext);

  const [ updatedItem, setUpdatedItem ] = useState <boolean> (false);
  const [ user, setUser ] = useState <IUser> ({
    _id: "",
    name: "",
    email: "",
    cpf: "",
    password: "",
    address: "",
    isAdmin: false,
  });

  useEffect(() => {
    if(state) {
      setUser(state.item);
    }
    else {
      setUpdatedItem(true);
    }
  }, [])

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(user !== null){
      setUser({...user, [name]: value})
    }
  }

  const handleAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, isAdmin: e.target.checked});
  }

  const config = {headers: { Authorization: `Bearer ${userToken}`}};

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      let response: AxiosResponse<any, any>;
      const data = { ...user };
      delete data._id;
      
      if(!user._id) {
        response = await instance.post("/user", data, config);
        alert("Usuário criado com sucesso!");
      }
      else {
        response = await instance.put(`/user/${user._id}`, data, config);
        alert("Usuário atualizado com sucesso!");
      }
      setUpdatedItem(true);
      navigate(-1);

    } catch (error) {
      console.log("ERRO: ", error)
    }
  }

  const removeUser = async () => {
    try {
      const response = await instance.delete(`/user/${user._id}`, config);
      alert("Usuário removido com sucesso!");
      navigate(-1);
    } catch (error) {
      console.log("ERRO: ", error);
    }
  }

  return (
    <StyleUserAdmin>
      <h3>Informações do Usuário:</h3>
      <button onClick={() => navigate("orders", {state : {userOrders: user.userOrders}})}>Ir para Pedidos</button>
    {
      updatedItem
      ? (
        <div>
          <p>ID do Usuário:</p>
          <p>{user._id}</p>
          <p>Nome do Usuário:</p>
          <p>{user.name}</p>
          <p>Email do Usuário:</p>
          <p>{user.email}</p>
          <p>CPF do Usuário:</p>
          <p>{user.cpf}</p>
          <p>Endereço do Usuário:</p>
          <p>{user.address}</p>
          <p>Tipo do Usuário:</p>
          <p>{user.isAdmin ? "Administrador": "Cliente"}</p>
        </div>
        )
        : (
        <form onSubmit={(e) => formHandler(e)}>
          <label htmlFor="name">Nome do Usuário:</label>
          <input type="text" value={user.name} onChange={(e) => handleValues(e)} />
          <label htmlFor="email">Email do Usuário:</label>
          <input type="email" value={user.email} onChange={(e) => handleValues(e)} />
          <label htmlFor="cpf">CPF do Usuário:</label>
          <input type="text" value={user.cpf} onChange={(e) => handleValues(e)} />
          <label htmlFor="address">Endereço do Usuário:</label>
          <input type="text" value={user.address} onChange={(e) => handleValues(e)} />
          <article>
            <label htmlFor="isAdmin">Usuário Administrador:</label>
            <input type="checkbox" name='isAdmin' checked={user.isAdmin} onChange={(e) => handleAdmin(e)} />
          </article>
          <input type="submit" value={user._id ? "Salvar" : "Criar"} />
        </form>
      )}
      <article>
        {
          updatedItem 
          ? <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button> 
          : <button onClick={() => setUpdatedItem(!updatedItem)}>Cancelar</button>
        }
        <button onClick={() => removeUser()}>Remover</button>
      </article>
    </StyleUserAdmin>
  )
}
