import React from "react";
import {FormRegister, InputDiv} from "./styles"

const RegisterPage = () => {
    return(
        <div>
        <FormRegister>
        <h1>Faça seu cadastro</h1>
        
            <InputDiv>
            <label htmlFor="name"></label>
            <input type="name" name="name" placeholder="Nome completo" />
            </InputDiv>

            <InputDiv>
            <label htmlFor="cpf"></label>
            <input type="cpf" name="cpf" placeholder="CPF" />
            </InputDiv>

            <InputDiv>
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="Email" />
            </InputDiv>

            <InputDiv>
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Senha" />
            </InputDiv>

             <InputDiv>
            <label htmlFor="address"></label>
            <input type="address" name="address" placeholder="Endereço" />
            </InputDiv>

            <div>
                <button>Cadastrar</button>
            </div>

            
            </FormRegister>

        
       
        </div>
    )
}
export default RegisterPage;