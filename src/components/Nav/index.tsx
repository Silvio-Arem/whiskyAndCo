import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <nav>
        <ul>
          <li><Link to="/products">Whiskys</Link></li>
          <li><Link to="#">Categorias</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="#">Sobre</Link></li>
          <li><Link to="/admin">Painel do Administrador</Link></li>
        </ul>
      </nav>
    );
  }