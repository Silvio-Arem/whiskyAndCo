import Logo from "../Logo";

interface HeaderProps {
    logoSrc: string;
    logoAlt: string;
    numItemsInCart: number;
  }
  
export default function Header(props: HeaderProps) {
    return (
      <header>
        <Logo src={props.logoSrc} alt={props.logoAlt} />
        <Nav />
        <SearchBar />
        <ShoppingCart numItems={props.numItemsInCart} />
      </header>
    );
  }
