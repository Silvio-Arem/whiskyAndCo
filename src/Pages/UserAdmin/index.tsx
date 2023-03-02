import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { users } from '../../data';
import { IUser } from '../../interfaces';

export default function UserAdmin() {

  const { state } = useLocation();

  const [ updatedItem, setUpdatedItem ] = useState <boolean> (true);
  const [ user, setUser ] = useState <IUser> ({
    id: 0,
    name: "",
    email: "",
    cpf: "",
    address: "",
    userType: "",
    userOrders: []
  });

  useEffect(() => {
    if(state !== null) {
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
    console.log(user);
    setUpdatedItem(true);
  }

  return (
    <section>
    {
      updatedItem
      ? (
        <div>
          <p>ID do Usuário:</p>
          <p>{user.id}</p>
          <p>Nome do Usuário:</p>
          <p>{user.name}</p>
          <p>Email do Usuário:</p>
          <p>{user.email}</p>
          <p>CPF do Usuário:</p>
          <p>{user.cpf}</p>
          <p>Endereço do Usuário:</p>
          <p>{user.address}</p>
          <p>Tipo do Usuário:</p>
          <p>{user.userType}</p>
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
          <label htmlFor="address">Tipo do Usuário:</label>
          <input type="text" value={user.userType} onChange={(e) => handleValues(e)} />
          <input type="submit" value="Salvar" />
        </form>
      )}
    </section>
  )
}
