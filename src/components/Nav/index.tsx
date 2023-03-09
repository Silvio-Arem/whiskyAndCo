import { MenuItem, NavContainer } from "./styles";

export default function Nav() {
    return (
      <NavContainer>
        <MenuItem to="/product" title="Ir para whiskys">Whiskys</MenuItem>
        <MenuItem to="/profile" title="Ir para  perfil">Perfil</MenuItem>
        <MenuItem to="#" title="Ir para informações sobre a loja">Sobre</MenuItem>
        <MenuItem to="/admin" title="Ir para painel administrativo">Painel do Administrador</MenuItem>
    </NavContainer>
    );
  }