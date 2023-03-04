import { IProduct } from "../../interfaces";
import { products } from "../../data";
import { Link } from "react-router-dom";
import { ProductsContainer } from "./styles";
import { Filter } from "../../components/Filter/styles";


export default function Products() {


  const product = products.map((item: IProduct) => (
    <div key={item.id} className="products__cards">
      <img src={item.img} alt={item.name} />
      <div className="products__cards-body">
        <h5>{item.name}</h5>
        <p>R$ {item.price}</p>
        <p>{item.category}</p>
        <div className="products__card-button">
          <Link to="/product" title="Ir para whisky selecionado">Descrição</Link>
        </div>
      </div>
    </div>
  ))

  return (
    <>
      <Filter>
        <details>
          <summary>
            Categoria
          </summary>
          <label htmlFor=""><input type="checkbox" />Whisky Japonês</label>
          <label htmlFor=""><input type="checkbox" />Tennesse Whiskey</label>
          <label htmlFor=""><input type="checkbox" />Bourbon Whiskey</label>
          <label htmlFor=""><input type="checkbox" />Rye</label>
        </details>
        <details>
          <summary>
            Marca
          </summary>
          <label htmlFor=""><input type="checkbox" />Johnnie Walker</label>
          <label htmlFor=""><input type="checkbox" />Jack Daniels</label>
          <label htmlFor=""><input type="checkbox" />Ballantines</label>
          <label htmlFor=""><input type="checkbox" />Chivas Regal</label>
        </details>
      </Filter>
      <ProductsContainer className="Products">
        {product}
      </ProductsContainer>
    </>
  );
}