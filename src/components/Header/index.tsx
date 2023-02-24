import Links from "../Links";
import Logo from "../Logo";
import LogoHeader from "../../assets/icons/logo-header.jpg";


export default function Header() {
    return (
        <header>
            <Logo alternative="Logo da loja" origin={LogoHeader} redirect="/"/>
            <nav>
                <Links texto="Perfil" redirect="/profile"/>
            </nav>
        </header>
    );
}
