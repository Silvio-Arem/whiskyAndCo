import { IProduct } from "../../interfaces";
import { products } from "../../data";
import { Link } from "react-router-dom";
import { ProductsContainer } from "./styles";
import { Filter } from "../../components/Filter/styles";
import { useState } from "react";

export default function Products() {

    const product: IProduct[] = products;
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      if (checked) {
        setSelectedCategories([...selectedCategories, value]);
      } else {
        setSelectedCategories(
          selectedCategories.filter((category) => category !== value)
        );
      }
    };

    const filteredProducts = selectedCategories.length
      ? product.filter((product) => selectedCategories.includes(product.category)
      )
      : product;

    return (
      <>
        <Filter>
          <details>
            <summary>
              Categoria
            </summary>
            <label htmlFor=""><input type="checkbox" value="Whisky Japonês" onChange={handleCategoryChange} />Whisky Japonês</label>
            <label htmlFor=""><input type="checkbox" value="Tennessee Whiskey" onChange={handleCategoryChange} />Tennessee Whiskey</label>
            <label htmlFor=""><input type="checkbox" value="Bourbon Whiskey" onChange={handleCategoryChange} />Bourbon Whiskey</label>
            <label htmlFor=""><input type="checkbox" value="Rye" onChange={handleCategoryChange} />Rye</label>
          </details>
        </Filter>
        <ProductsContainer className="Products">
          {filteredProducts.map((item: IProduct) => (
            <div key={item.id} className="products__cards">
              <img src={item.img} alt={item.name} />
              <div className="products__cards-body">
                <h5>{item.name}</h5>
                <p>R$ {item.price}</p>
                <p>{item.category}</p>
                <div className="products__card-button">
                  <Link to="/product" title="Ir para whisky selecionado">
                    Descrição
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ProductsContainer>
      </>
    );
  ;
}