import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { users } from '../../data';
import { IUser } from '../../interfaces';

export default function UserAdmin() {

  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState <boolean> (true);
  const [ user, setUser ] = useState <IUser> ({
    id: 0,
    name: "",
    email: "",
    cpf: "",
    address: "",
    isAdmin: false,
    userOrders: []
  });

  useEffect(() => {
    if(state) {
      setUser(users[state.id--]);
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

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdatedItem(true);
  }

  const removeUser = (id: number) => {
    console.log(id);
  }

  return (
    <section>
      <h3>Informações do Usuário:</h3>
    {
      updatedItem
      ? (
        <div>
          <p>ID do Usuário:</p>
          <p>{user.id}</p>
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
          <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar Dados</button>
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
          <label htmlFor="isAdmin">Tipo do Usuário:</label>
          <input type="checkbox" checked={user.isAdmin} onChange={(e) => handleValues(e)} />
          <input type="submit" value="Salvar" />
        </form>
      )}
      <button onClick={() => removeUser(user.id)}>Excluir</button>
    </section>
  )
}
