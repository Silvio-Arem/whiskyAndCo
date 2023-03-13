import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CartIcon from "../../assets/icons/cart-icon.png";
import { ShoppingCartContainer } from "./styles";
import Button from '../Button';
import { useLocation } from 'react-router-dom';
import { IProduct } from '../../interfaces';

interface ShoppingCartProps {
    cart: {
        cartItem: IProduct;
        numItems: number;
    }[] | null;
}

export default function ShoppingCart({ cart }: ShoppingCartProps) {
    const { state } = useLocation();
  const [ product, setProduct ] = useState <IProduct> ({
    _id: "",
    name: "",
    category: {_id: "", name: ""},
    brand: {_id: "", name: ""},
    picture: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    if(state) {
      setProduct(state);
    }
    else {

    }
  }, [])

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true);
    }

    return (
        <ShoppingCartContainer>
            <div className="carrinho">
                <p onClick={handleShow}>
                    <img src={CartIcon} alt="Ícone do carrinho" />
                    <span>{cart?.length} itens</span>
                </p>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {cart?.map((product) => (
                        <div key={product.cartItem._id}>
                            <h4>{product.cartItem.name}</h4>
                            <p>{product.cartItem.description}</p>
                            <p>Preço: R$ {product.cartItem.price.toFixed(2)}</p>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <div>
                    <Button link='' title={''} text={'Continuar comprando'} onClick={() => setShowModal(false)}/>
                    <Button title={''} text={'Finalizar sua compra!'} link={'checkout'} />
                    </div>
                </Modal.Footer>
            </Modal>
        </ShoppingCartContainer>
    );
}