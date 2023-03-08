import React, { useState } from "react";
import { LoginDiv, Form, Body, ActionsDiv, Div, CadastreDiv} from "./styles"

const loginPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const result = {
        email: {email},
        password: {password}
    }
    console.log(email)

  return (
      <Body>   
  <LoginDiv>
  
  <Form>
  <h1 className="title">Faça seu login </h1>
  <h3>Entre com Email.</h3>
  <Div>
      <label htmlFor="email"></label>
      <input type="email" name="email" placeholder="Email" value={email} onChange= {(event) => setEmail(event.target.value)} />
  </Div>
  <Div>
      <label htmlFor="password"></label>
      <input type="password" name="password" placeholder="Senha" value={password} onChange= {(event) => setPassword(event.target.value)}/>
  </Div>
  <ActionsDiv>
  <button type="submit">Entrar</button>

  <p> Esqueceu a <a href=""><b>senha</b></a>?</p>

  </ActionsDiv>


  </Form>
  <CadastreDiv>
  <p> Ou crie uma <a href=""><b>conta</b></a>.</p>
  </CadastreDiv>

  </LoginDiv>
  </Body>


  )
}
export default loginPage;