import Logo from "../Logo";
import Nav from "../Nav";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import LogoHeader from "../../assets/icons/logo-header.jpg"

  
export default function Header() {
    return (
      <header>
        <Logo src={LogoHeader} alt="Logo da loja" />
        <Nav />
        <SearchBar />
        <ShoppingCart />
      </header>
    );
  }
