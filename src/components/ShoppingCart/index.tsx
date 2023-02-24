import CartIcon from "../../assets/icons/cart-icon.png";


export default function ShoppingCart() {
    return (
        <div className="carrinho">
            <a href="/checkout">
                <img src={CartIcon} alt="Ícone da minha sacola" />
            </a>
        </div>
    );
}