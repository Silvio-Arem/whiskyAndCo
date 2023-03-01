import { Link } from "react-router-dom";
import { NavContainer } from "./styles";

export default function Nav() {
    return (
      <NavContainer>
      <ul>
        <li><Link to="/products">Whiskys</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><Link to="#">Sobre</Link></li>
        <li><Link to="/admin">Painel do Administrador</Link></li>
      </ul>
    </NavContainer>
    );
  }