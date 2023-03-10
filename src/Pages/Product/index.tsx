import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IProduct } from "../../interfaces";
import { ProductSection } from "./styles";
import Counter from "../../components/Counter";
import Button from "../../components/Button";
import {products} from "../../data";

export default function Product() {

  const { state } = useLocation();
  console.log(state);
  
  const product: IProduct[] = products;

  const { id } = useParams<{ id: string }>();

  const selectedProduct = id ? product.filter((item: IProduct) => item.id === Number(id))[0] : undefined;

  const shortDescription = selectedProduct?.description.slice(0, 150) + '...';

  const [quantity, setQuantity] = useState(1);

  const totalPrice = selectedProduct?.price ? selectedProduct.price * quantity : 0;

  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function handleQuantityChange(newValue: number) {
    setQuantity(newValue);
  }

  function handleAddToCart(item: IProduct) {
    const itemWithPrice = { ...item, totalPrice };
    setCartItems([...cartItems, itemWithPrice]);
  }



  return (
    <>
      {selectedProduct ? (
        <ProductSection className="Products">
          <div key={selectedProduct.id} className="products__cards">
            <div>
              <img src={selectedProduct.picture} alt={selectedProduct.name} />
            </div>
            <div className="products__cards-body">
              <h5>{selectedProduct.name}</h5>
              <p>R$ {totalPrice}</p>
              <p><b>{selectedProduct.category}</b></p>
              <p className="product__description">{shortDescription}</p>
              <Counter quantity={quantity} onQuantityChange={handleQuantityChange} />
              <div className="buttons__choice">
                <Button link="" title="Adicionar ao carrinho" text="Comprar Agora" onClick={() => handleAddToCart(selectedProduct)}/>
                <Button link={`/products/`} title="Continuar comprando" text="Continuar Comprando" />
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
