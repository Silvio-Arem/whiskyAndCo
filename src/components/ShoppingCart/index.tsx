import CartIcon from "../../assets/icons/cart-icon.png";
import { ShoppingCartContainer } from "./styles";

interface ShoppingCartProps {
    numItems: number;
}

export default function ShoppingCart(props: ShoppingCartProps) {
    return (
        <ShoppingCartContainer>
            <div className="carrinho">
                <a href="/carrinho">
                    <img src={CartIcon} alt="Ícone do carrinho" />
                    <span>{props.numItems} itens</span>
                </a>
            </div>
        </ShoppingCartContainer>
    );
}