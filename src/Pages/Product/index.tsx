import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct, IShoppingCartItem } from "../../interfaces";
import { ProductSection } from "./styles";
import Counter from "../../components/Counter";
import Button from "../../components/Button";
import { AuthContext } from "../../Context/AuthContext";



export default function Product() {

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


  const [quantity, setQuantity] = useState(1);


  function handleQuantityChange(newValue: number) {
    setQuantity(newValue);
  }


  const { userToken } = useContext(AuthContext);

  const [shoppingCart, setShoppingCart] = useState<IShoppingCartItem[]>([]);

  const handleAddToCart = () => {}

  const handleRemoveFromCart = (id: number) => {};


  return (
    <>
      {product._id !== "" ? (
        <ProductSection className="Products">
          <div key={product._id} className="products__cards">
            <div>
              <img src={product.picture} alt={product.name} />
            </div>
            <div className="products__cards-body">
              <h5>{product.name}</h5>
              <p>R$ {product.price}</p>
              <p><b>{product.category.name}</b></p>
              <p className="product__description">{product.description}</p>
              <Counter quantity={quantity} onQuantityChange={handleQuantityChange} />
              <div className="buttons__choice">
                <Button  link="" title="Adicionar ao carrinho" text="Levar ao Carrinho" onClick={() => handleAddToCart}/>
                <Button link={`/checkout`} title="Comprar agora" text="Comprar agora" />
              </div>
            </div>
          </div>
        </ProductSection>
      ) : (
        <div>Produto não encontrado</div>
      )}
      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCart.map((item: IShoppingCartItem) => (
          <li>
            <p>{item.product.name}</p>
            <p>Preço: {item.product.price}</p>
            <p>Quantidade: {item.quantity}</p>
            <p>Total: {item.quantity * item.product.price}</p>
            <button onClick={() => handleRemoveFromCart(item.product._id)}></button>
          </li>
        ))}
      </ul>
    </>
  )
}
