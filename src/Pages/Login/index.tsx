import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { LoginDiv, Form, Body, ActionsDiv, Div, CadastreDiv} from "./styles"

const LoginPage = () => {

    const { login, userToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      login(email, password);
      navigate("/", {replace: true});
    }

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
  <p> Ou crie uma <a href="http://localhost:3000/register"><b>conta</b></a>.</p>
  </CadastreDiv>

  </LoginDiv>
  )
}
export default LoginPage;