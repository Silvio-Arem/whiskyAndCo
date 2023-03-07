import { Link, useParams } from "react-router-dom";
import { products } from "../../data";
import { IProduct } from "../../interfaces";
import { ProductSection } from "./styles";
import Counter from "../../components/Counter";

export default function Product() {

    const product: IProduct[] = products;

    const {id} = useParams<{id: string}>();

    const selectedProduct = id ? product.filter((item: IProduct) => item.id === Number(id))[0] : undefined;

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
              <p>R$ {selectedProduct.price}</p>
              <p>{selectedProduct.category}</p>
              <p>{selectedProduct.description}</p>
              <Counter />
              <div className="products__card-button">
                <Link to={`/checkout/${selectedProduct.id}`} title="Ir para whisky selecionado">
                  Comprar Agora
                </Link>
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
