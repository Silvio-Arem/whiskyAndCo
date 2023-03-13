import Logo from "../Logo";
import Nav from "../Nav";
import ShoppingCart from "../ShoppingCart";
import LogoHeader from "../../assets/icons/logo-header.png"
import LoginIcon from "../LoginIcon";
import { DivCartLogin, DivLogoMenu, HeaderContainer } from "./styles";
import { useContext, useState } from "react";
import { Menu, MenuButton, MenuItem } from "../Nav/styles";
import { AuthContext } from "../../Context/AuthContext";


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
      <DivLogoMenu>
      <Logo src={LogoHeader} alt="Logo da loja" />
      <MenuButton className={menuOpen ? "active" : ""} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <Nav />
      </DivLogoMenu>
      <DivCartLogin>
      <ShoppingCart cart={null} />
      <Menu open={menuOpen}>
        <MenuItem to="/" title="Ir para home" onClick={handleMenuClick}>Início</MenuItem>
        <MenuItem to="/products" title="Ir para whiskys" onClick={handleMenuClick}>Whiskys</MenuItem>
        <MenuItem to="/profile" title="Ir para  perfil" onClick={handleMenuClick}>Perfil</MenuItem>
        <MenuItem to="#" title="Ir para informações sobre a loja" onClick={handleMenuClick}>Sobre</MenuItem>
        <MenuItem to="/admin" title="Ir para painel administrativo" onClick={handleMenuClick} >Painel do Administrador</MenuItem>
        <MenuItem to="#" title="Fechar menu" onClick={handleMenuClick}>Fechar Menu</MenuItem>
      </Menu>
      <LoginIcon />
      </DivCartLogin>
    </HeaderContainer>
  );
}
