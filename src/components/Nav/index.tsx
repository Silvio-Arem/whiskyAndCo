import { Link } from "react-router-dom";
import { LinkItem, LinkList } from "./styles";

export default function Nav() {
    return (
      <nav>
        <LinkList>
          <LinkItem><Link to="/products">Whiskys</Link></LinkItem>
          <LinkItem><Link to="/profile">Perfil</Link></LinkItem>
          <LinkItem><Link to="#">Sobre</Link></LinkItem>
          <LinkItem><Link to="/admin">Painel do Administrador</Link></LinkItem>
        </LinkList>
      </nav>
    );
  }