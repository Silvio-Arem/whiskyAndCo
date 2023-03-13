import { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { IUser } from '../../interfaces';
import { instance } from '../../requestConfig';

export default function UserAdmin() {

  const { state } = useLocation();
  const navigate = useNavigate();
  const { userToken } = useContext(AuthContext);

  const [ updatedItem, setUpdatedItem ] = useState <boolean> (true);
  const [ user, setUser ] = useState <IUser> ({
    _id: "",
    name: "",
    email: "",
    cpf: "",
    password: "",
    address: "",
    isAdmin: false,
    userOrders: []
  });

  useEffect(() => {
    if(state) {
      setUser(state.item);
    }
    else {
      setUpdatedItem(false);
    }
  }, [])

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(user !== null){
      setUser({...user, [name]: value})
    }
  }

  const config = {headers: { Authorization: `Bearer ${userToken}`}};

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      let response: AxiosResponse<any, any>;
      const data = { ...user };
      const itemId = user._id;
      delete user._id;
      
      if(!itemId) {
        response = await instance.post("/product", data, config);
        alert("Produto criado com sucesso!");
      }
      else {
        response = await instance.put(`/product/${itemId}`, data, config);
        alert("Produto atualizado com sucesso!");
      }
      setUpdatedItem(true);
      navigate(-1);

    } catch (error) {
      console.log("ERRO: ", error)
    }
  }

  const removeUser = () => {
  }

  return (
    <section>
      <h3>Informações do Usuário:</h3>
    {
      updatedItem
      ? (
        <div>
          <p>ID do Usuário:</p>
          <p>{user._id}</p>
          <button onClick={() => navigate("orders", {state : {userOrders: user.userOrders}})}>Ir para Pedidos</button>
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
          <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
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
          <label htmlFor="isAdmin">Usuário Administrador:</label>
          <input type="checkbox" checked={user.isAdmin} onChange={(e) => handleValues(e)} />
          <input type="submit" value="Salvar" />
        </form>
      )}
      <div>
        {!updatedItem && <button onClick={() => setUpdatedItem(!updatedItem)}>Cancelar</button>}
        <button onClick={() => removeUser()}>Remover</button>
      </div>
      <button onClick={() => removeUser()}>Remover</button>
    </section>
  )
}
