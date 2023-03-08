import React, { useState } from "react";
import {FormRegister, InputDiv} from "./styles"

const RegisterPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submit", {name, cpf, email, password, address});
    }


    return(
        <div>
        <FormRegister onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        
            <InputDiv>
            <label htmlFor="name"></label>
            <input type="name" name="name" placeholder="Nome completo" value={name} onChange= {(event) => setName(event.target.value)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="cpf"></label>
            <input type="cpf" name="cpf"  placeholder="CPF" value={cpf} onChange= {(event) => setCpf(event.target.value)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="Email" value={email} onChange= {(event) => setEmail(event.target.value)}/>
            </InputDiv>

            <InputDiv>
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Senha" value={password} onChange= {(event) => setPassword(event.target.value)}/>
            </InputDiv>

             <InputDiv>
            <label htmlFor="address"></label>
            <input type="address" name="address" placeholder="Endereço" value={address} onChange= {(event) => setAddress(event.target.value)}/>
            </InputDiv>

            <div>
                <button>Cadastrar</button>
            </div>

            
            </FormRegister>

        
       
        </div>
    )
}
export default RegisterPage;