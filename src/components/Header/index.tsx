import Logo from "../Logo";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import LogoHeader from "../../assets/icons/logo-header.png"
import LoginIcon from "../LoginIcon";
import { HeaderContainer } from "./styles";
import { useState } from "react";
import { Menu, MenuButton, MenuItem } from "../Nav/styles";


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo src={LogoHeader} alt="Logo da loja" />
      <MenuButton className={menuOpen ? "active" : ""} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <Nav />
      <SearchBar />
      <ShoppingCart numItems={0} />
      <Menu open={menuOpen}>
        <MenuItem to="/products" title="Ir para whiskys" onClick={handleMenuClick}>Whiskys</MenuItem>
        <MenuItem to="/profile" title="Ir para  perfil" onClick={handleMenuClick}>Perfil</MenuItem>
        <MenuItem to="#" title="Ir para informações sobre a loja" onClick={handleMenuClick}>Sobre</MenuItem>
        <MenuItem to="/admin" title="Ir para painel administrativo" onClick={handleMenuClick}>Painel do Administrador</MenuItem>
        <MenuItem to="/" title="Fechar menu" onClick={handleMenuClick}>Fechar Menu</MenuItem>
      </Menu>
      <LoginIcon />
    </HeaderContainer>
  );
}
