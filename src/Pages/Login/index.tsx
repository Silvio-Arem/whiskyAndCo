import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { LoginDiv, Form, Body, ActionsDiv, Div, CadastreDiv, LinkReact} from "./styles"


const LoginPage = () => {

    const { login, userToken } = useContext(AuthContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      login(email, password);
    }

    console.log(userToken);

  return (  
  <LoginDiv>
  <Form onSubmit={handleSubmit}>
  <h1 className="title">Faça seu login </h1>
  <h3>Entre com Email.</h3>
  <Div>
      <label htmlFor="email"></label>
      <input type="email" name="email" required placeholder="Email" value={email} onChange= {(event) => setEmail(event.target.value)} />
  </Div>
  <Div>
      <label htmlFor="password"></label>
      <input type="password" name="password" required placeholder="Senha" value={password} onChange= {(event) => setPassword(event.target.value)}/>
  </Div>
  <ActionsDiv>
  <button type="submit">Entrar</button>

  <p> Esqueceu a <a href=""><b>senha</b></a>?</p>

  </ActionsDiv>


  </Form>
  <CadastreDiv>
  <p> Ou crie uma <LinkReact to="/register"><p>conta</p></LinkReact>.</p>
  </CadastreDiv> 

  </LoginDiv>
  )
}
export default LoginPage;