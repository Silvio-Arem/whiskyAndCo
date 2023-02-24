interface ShoppingCartProps {
    numItems: number;
}

export default function ShoppingCart(props: ShoppingCartProps) {
    return (
        <div className="carrinho">
            <a href="/carrinho">
                <img src="carrinho.png" alt="Ícone do carrinho" />
                <span>Meu carrinho ({props.numItems})</span>
            </a>
        </div>
    );
}