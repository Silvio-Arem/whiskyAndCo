import Logo from "../Logo";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import LogoHeader from "../../assets/icons/logo-header.png"
import LoginIcon from "../LoginIcon";
import { HeaderContainer } from "./styles";

  
export default function Header() {
    return (
      <HeaderContainer>
        <Logo src={LogoHeader} alt="Logo da loja" />
        <Nav />
        <SearchBar />
        <ShoppingCart numItems={0} />
        <LoginIcon />
      </HeaderContainer>
    );
  }
