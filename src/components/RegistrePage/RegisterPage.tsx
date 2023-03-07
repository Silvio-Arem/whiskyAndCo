import React from "react";
import {FormRegister, InputDiv,InputDiv2, AnddressDiv} from "./styles"

const RegisterPage = () => {
    return(
        <div>
        <FormRegister>
        <h1>Faça seu cadastro</h1>
        
            <InputDiv>
            <label htmlFor=""></label>
            <input type="text" name="name" placeholder="Nome completo" />
            </InputDiv>
            <InputDiv>
            <label htmlFor=""></label>
            <input type="text" name="cpf" placeholder="CPF" />
            </InputDiv>
            <InputDiv>
            <label htmlFor=""></label>
            <input type="text" name="address" placeholder="Email" />
            </InputDiv>
         

         <AnddressDiv>
            <h3>Endereço</h3>
            <InputDiv2>
            <label htmlFor=""></label>
            <input type="text" name="email" placeholder="Rua" />
            </InputDiv2>
            <InputDiv2>
            <label htmlFor="password"></label>
            <input type="cep" name="password" placeholder="Cep" />
            </InputDiv2>
            <InputDiv2>
            <label htmlFor=""></label>
            <input type="text" name="email" placeholder="Bairro" />
            </InputDiv2>
            <InputDiv2>
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Cidade" />
            </InputDiv2>
            </AnddressDiv>
            </FormRegister>
            <div>
                <button>Cadastrar</button>
            </div>
        
       
        </div>
    )
}
export default RegisterPage;