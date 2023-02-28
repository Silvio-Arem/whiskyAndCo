import { Link } from "react-router-dom";
import { NavContainer } from "./styles";

export default function Nav() {
    return (
      <NavContainer>
      <ul>
        <li><Link to="/products" title="Ir para whiskys">Whiskys</Link></li>
        <li><Link to="/profile" title="Ir para  perfil">Perfil</Link></li>
        <li><Link to="#" title="Ir para informações sobre a loja">Sobre</Link></li>
        <li><Link to="/admin" title="Ir para painel administrativo">Painel do Administrador</Link></li>
      </ul>
    </NavContainer>
    );
  }