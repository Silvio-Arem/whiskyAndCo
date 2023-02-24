import Logo from "../Logo";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import LogoHeader from "../../assets/icons/logo-header.jpg"
import LoginIcon from "../LoginIcon";
import { HeaderDefault } from "./styles";

  
export default function Header() {
    return (
      <HeaderDefault>
        <Logo src={LogoHeader} alt="Logo da loja" />
        <Nav />
        <SearchBar />
        <ShoppingCart />
        <LoginIcon />
      </HeaderDefault>
    );
  }
