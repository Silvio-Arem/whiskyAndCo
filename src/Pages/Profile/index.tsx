import { EventType } from "@testing-library/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data";
import { IUser } from "../../interfaces";

export default function Profile() {
  
  const userData: IUser = users[0];
  
  const [ updatedProfile, setUpdatedProfile ] = useState(true);
  const [ userProfile, setUserProfile ] = useState({
    id: userData.id, 
    name: userData.name,
    email: userData.email,
    cpf: userData.cpf,
    address: userData.address,
    userType: userData.userType,
    userOrders: userData.userOrders
  })
  
  const navigate = useNavigate();
  
  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile({...userProfile, [name]: value})
  }

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userProfile);
    setUpdatedProfile(true);
  }

  return (
    <section>
      <h3>Dados Pessoais:</h3>
      <p>Tipo do Usuário</p>
      <p>{userProfile.userType}</p>
      <button>Alterar Senha</button>
      <button onClick={() => navigate("orders", {state : {userOrders: userData.userOrders}})}>Ir para Pedidos</button>
    {
    updatedProfile
    ? (
      <div>
        <p>Nome:</p>
        <p>{userProfile.name}</p>
        <p>E-mail:</p>
        <p>{userProfile.email}</p>
        <p>CPF:</p>
        <p>{userProfile.cpf}</p>
        <p>Endereço:</p>
        <p>{userProfile.address}</p>
        <button onClick={() => setUpdatedProfile(!updatedProfile)}>Atualizar Dados</button>
      </div>
    )
    : (
      <form onSubmit={(e) => formHandler(e)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" value={userProfile.name} onChange={(e) => handleValues(e)} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" value={userProfile.email} onChange={(e) => handleValues(e)} />
        <label htmlFor="cpf">CPF:</label>
        <input type="text" value={userProfile.cpf} onChange={(e) => handleValues(e)} />
        <label htmlFor="address">Endereço</label>
        <input type="text" value={userProfile.address} onChange={(e) => handleValues(e)} />
        <input type="submit" value="Salvar" />
      </form>
    )}
    </section>
  );
}

