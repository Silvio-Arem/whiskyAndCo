import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../interfaces";
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

  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function handleQuantityChange(newValue: number) {
    setQuantity(newValue);
  }


  function handleAddToCart(item: IProduct) {
    const totalPrice = quantity * Number(product.price)
    const itemWithPrice = { ...item, totalPrice };
    console.log(itemWithPrice);
    setCartItems([...cartItems, itemWithPrice]);
  }

  const { userToken } = useContext(AuthContext);
  console.log(userToken);

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
              <p>R$ {quantity * product.price}</p>
              <p><b>{product.category.name}</b></p>
              <p className="product__description">{product.description}</p>
              <Counter quantity={quantity} onQuantityChange={handleQuantityChange} />
              <div className="buttons__choice">
                <Button  link="" title="Adicionar ao carrinho" text="Comprar Agora" onClick={() => handleAddToCart(product)}/>
                <Button link={`/product`} title="Continuar comprando" text="Continuar Comprando" />
              </div>
            </div>
          </div>
        </ProductSection>
      ) : (
        <div>Produto não encontrado</div>
      )}
    </>
  )
}
