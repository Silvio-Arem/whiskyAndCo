import Link from "../Link";
import Logo from "../Logo";
import LogoHeader from "../../assets/icons/logo-header.jpg";

export default function Header() {
    return (
        <header>
            <Logo alternative="Logo da loja" origin={LogoHeader} redirect="#"/>
            <nav>
                <Link texto="Sobre nós" redirect="#"/>
            </nav>
        </header>
    );
}
