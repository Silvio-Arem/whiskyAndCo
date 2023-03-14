import { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CartIcon from "../../assets/icons/cart-icon.png";
import { ShoppingCartContainer } from "./styles";
import Button from '../Button';
import { CartContext, IProductCart } from '../../Context/CartContext';


export default function ShoppingCart() {

    const { shopCart, removeFromCart, setShopCart } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);


    const handleShow = () => {
        setShowModal(true);
    }

    useEffect(() => {
        setShopCart(shopCart);
      }, [shopCart]);

    return (
        <ShoppingCartContainer>
            <div className="carrinho">
                <p onClick={handleShow}>
                    <img src={CartIcon} alt="Ícone do carrinho" />
                    <span>{shopCart.reduce((acumulador, atual) => { return acumulador + atual.quantity }, 0)}</span>
                </p>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {shopCart.map((product: IProductCart) => (
                        <div key={product.product._id}>
                            <p>{product.product.name} - R$ {product.product.price}</p>
                            <button onClick={() => removeFromCart(product.product)}>X</button>
                            <p>{product.quantity}</p>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Button link='' title={''} text={'Continuar comprando'} onClick={() => setShowModal(false)} />
                        <Button title={''} text={'Finalizar sua compra!!'} link={'checkout'} />
                    </div>
                </Modal.Footer>
            </Modal>
        </ShoppingCartContainer>
    );
}