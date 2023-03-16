import { EventType } from "@testing-library/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { IUser } from "../../interfaces";
import { instance } from "../../requestConfig";

import { StyledProfile } from "./styles";

export default function Profile() {
  
  const { userToken } = useContext(AuthContext);

  const [ updatedProfile, setUpdatedProfile ] = useState(true);
  const [ userOrders, setUserOrders ] = useState([]);
  const [ userProfile, setUserProfile ] = useState({
    _id: "", 
    name: "",
    email: "",
    cpf: "",
    address: "",
    isAdmin: false
  })
  
  const navigate = useNavigate();
  const config = { headers: { Authorization: `Bearer ${userToken}`}};

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile({...userProfile, [name]: value})
  }

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await instance.put(`user/${userProfile._id}`, config);
      setUpdatedProfile(true);
      alert("Dados alterados com sucesso!");
    } catch (error) {
      console.log("ERRO: ", error);
    }
  }

  const getData = async () => {
    try {
      const response = await axios.all([
        instance.get("/user", config),
        instance.get("/userOrders", config)
      ])
      .then(axios.spread((user, uOrders) => {
        setUserProfile(user.data);
        setUserOrders(uOrders.data)
      }));
    } catch (error) {
      console.log("ERRO: ", error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <StyledProfile>
      <h3>Dados Pessoais:</h3>
      <p>Tipo do Usuário</p>
      <p>{userProfile.isAdmin ? "Administrador": "Cliente"}</p>
      <button>Alterar Senha</button>
      <button onClick={() => navigate("orders", {state : userOrders})}>Ir para Pedidos</button>
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
        <input type="text" name="name" value={userProfile.name} onChange={(e) => handleValues(e)} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" value={userProfile.email} onChange={(e) => handleValues(e)} />
        <label htmlFor="cpf">CPF:</label>
        <input type="text" name="cpf" value={userProfile.cpf} onChange={(e) => handleValues(e)} />
        <label htmlFor="address">Endereço</label>
        <input type="text" name="address" value={userProfile.address} onChange={(e) => handleValues(e)} />
        <input type="submit" value="Salvar" />
      </form>
    )}
    {!updatedProfile && <button onClick={() => setUpdatedProfile(!updatedProfile)}>Cancelar</button>}
    </StyledProfile>
  );
}

