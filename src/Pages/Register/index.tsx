import React, { useState } from "react";
import { RegisterUser } from "./registerApi";
import {FormRegister, InputDiv} from "./styles"

const RegisterPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [isAdmin, setisAdmin] = useState<boolean>(false)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submit", {name, cpf, email, password, address, isAdmin});
    }
const payload ={
    name,
    email,
    password,
    cpf,
    address,
    isAdmin
    
    
};
try{
    const response = RegisterUser(payload)
    
} catch (error) {}

    return(
        <div>
        <FormRegister onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        
            <InputDiv>
            <label htmlFor="name"></label>
            <input type="name" name="name" required placeholder="Nome completo" value={name} onChange= {(event) => setName(event.target.value)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="cpf"></label>
            <input type="cpf" name="cpf"  required placeholder="CPF" value={cpf} onChange= {(event) => setCpf(event.target.value)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="email"></label>
            <input type="email" name="email" required placeholder="Email" value={email} onChange= {(event) => setEmail(event.target.value)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="password"></label>
            <input type="password" name="password" required placeholder="Senha" value={password} onChange= {(event) => setPassword(event.target.value)}/>
            </InputDiv>

             <InputDiv>
            <label htmlFor="address"></label>
            <input type="address" name="address" required placeholder="Endereço" value={address} onChange= {(event) => setAddress(event.target.value)}/>
            </InputDiv>
            <label htmlFor="">Sou um administrador</label>
            <input type="checkbox" name="isAdmin" onChange={(event)=> setisAdmin(event.target.checked)}/>
            <div>
                <button>Cadastrar</button>
            </div>

            
            </FormRegister>

        
       
        </div>
    )
}
export default RegisterPage;