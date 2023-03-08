import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import { IProduct } from "../../interfaces";
import { ProductSection } from "./styles";
import Counter from "../../components/Counter";
import Button from "../../components/Button";

export default function Product() {

  const product: IProduct[] = products;

  const { id } = useParams<{ id: string }>();

  const selectedProduct = id ? product.filter((item: IProduct) => item.id === Number(id))[0] : undefined;

  const shortDescription = selectedProduct?.description.slice(0, 150) + '...';

  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(newValue: number) {
    setQuantity(newValue);
  }

  const totalPrice = selectedProduct?.price ? selectedProduct.price * quantity : 0;



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
                <Button link={`/checkout/${selectedProduct.id}`} title="Ir para whisky checkout" text="Comprar Agora" />
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
