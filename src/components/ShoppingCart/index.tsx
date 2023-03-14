import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CartIcon from "../../assets/icons/cart-icon.png";
import { ShoppingCartContainer } from "./styles";
import Button from '../Button';
import { IProduct } from '../../interfaces';
import Product from '../../Pages/Product';
import Cart from '../Cart';

const products: IProduct[] = [
    {
        _id: "",
        name: "",
        category: {_id: "", name: ""},
        brand: {_id: "", name: ""},
        picture: "",
        price: 0,
        description: "",
      }
]

export default function ShoppingCart() {
    
    
    
    const [showModal, setShowModal] = useState(false);


    const handleShow = () => {
        setShowModal(true);
    }

    return (
        <ShoppingCartContainer>
            <div className="carrinho">
                <p onClick={handleShow}>
                    <img src={CartIcon} alt="Ícone do carrinho" />
                    <span></span>
                </p>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
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