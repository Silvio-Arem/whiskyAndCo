import { AxiosResponse } from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { IUser } from "../../interfaces";
import { instance } from "../../requestConfig";
import { RegisterUser } from "./registerApi";
import {FormRegister, InputDiv} from "./styles"

const RegisterPage = () => {

    const{ loggedUser, userToken } = useContext(AuthContext);

    const [ user, setUser ] = useState <IUser> ({
        name: "",
        email: "",
        cpf: "",
        password: "",
        address: "",
        isAdmin: false,
        userOrders: []
      });

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();
            let response: AxiosResponse<any, any>
            const config = {
                headers: {
                  Authorization: `Bearer ${userToken}`
            }};
            const data = { ...user };

            if(user.isAdmin) {
                loggedUser.isAdmin
                ? response = await instance.post("/user/admin", data, config)
                : alert("Você não tem permissão para cadastar usuário administrador.");
            } 
            else {
                response = await instance.post("/user", data);
            } 
        } catch (error) {
            console.log("ERRO: ", error);
        }
    }
    
    const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if(user !== null){
          setUser({...user, [name]: value})
        }
      }

    return(
        <FormRegister onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        
            <InputDiv>
            <label htmlFor="name"></label>
            <input type="text" name="name" required placeholder="Nome completo" value={user.name} onChange= {(e) => handleValues(e)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="cpf"></label>
            <input type="cpf" name="cpf"  required placeholder="CPF" value={user.cpf} onChange= {(e) => handleValues(e)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="email"></label>
            <input type="email" name="email" required placeholder="Email" value={user.email} onChange= {(e) => handleValues(e)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="password"></label>
            <input type="password" name="password" required placeholder="Senha" value={user.password} onChange= {(e) => handleValues(e)}/>
            </InputDiv>

             <InputDiv>
            <label htmlFor="address"></label>
            <input type="address" name="address" required placeholder="Endereço" value={user.address} onChange= {(e) => handleValues(e)}/>
            </InputDiv>
            <label htmlFor="">Sou um administrador</label>
            <input type="checkbox" name="isAdmin" checked={user.isAdmin} onChange= {(e) => handleValues(e)}/>
            <div>
                <button type="submit">Cadastrar</button>
            </div>

            </FormRegister>
    )
}
export default RegisterPage;