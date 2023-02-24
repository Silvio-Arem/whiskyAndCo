import Links from "../Links";
import Logo from "../Logo";
import LogoHeader from "../../assets/icons/logo-header.jpg";
import { HeaderDefault } from "./styles";


export default function Header() {
    return (
        <HeaderDefault>
            <Logo alternative="Logo da loja" origin={LogoHeader} redirect="/"/>
            <nav>
                <Links texto="Perfil" redirect="/profile"/>
            </nav>
        </HeaderDefault>
    );
}
