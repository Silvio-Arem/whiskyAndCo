import { useContext, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CartIcon from "../../assets/icons/cart-icon.png";
import { ShoppingCartContainer } from "./styles";
import Button from '../Button';
import { CartContext, IProductCart } from '../../Context/CartContext';
import styled from 'styled-components';


export default function ShoppingCart() {

    const DivModalBody = styled.div`
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    `;

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
                        <DivModalBody key={product.product._id}>
                            <p>{product.quantity} - {product.product.name} - R$ {product.product.price}</p>
                            <Button title={'Remover item'} text={'X'} link={''} onClick={() => removeFromCart(product.product)} />
                        </DivModalBody>
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