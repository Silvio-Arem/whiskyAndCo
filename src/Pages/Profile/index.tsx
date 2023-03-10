import { EventType } from "@testing-library/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces";

export default function Profile() {
  
  const [ updatedProfile, setUpdatedProfile ] = useState(true);
  const [ userProfile, setUserProfile ] = useState({
    _id: "", 
    name: "",
    email: "",
    cpf: "",
    address: "",
    isAdmin: false,
    userOrders: []
  })
  
  const navigate = useNavigate();
  
  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile({...userProfile, [name]: value})
  }

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdatedProfile(true);
  }

  return (
    <section>
      <h3>Dados Pessoais:</h3>
      <p>Tipo do Usuário</p>
      <p>{userProfile.isAdmin ? "Administrador": "Cliente"}</p>
      <button>Alterar Senha</button>
      <button onClick={() => navigate("orders", {state : {userOrders: userProfile.userOrders}})}>Ir para Pedidos</button>
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

