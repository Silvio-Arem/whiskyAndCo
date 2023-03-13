import {  IBrand, ICategory, IProduct } from "../../interfaces";
import { PageDescript, ProductsContainer } from "./styles";
import { Filter } from "../../components/Filter/styles";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

import axios, { AxiosResponse } from "axios";
import { instance } from "../../requestConfig";
import { Link, useNavigate } from "react-router-dom";
 
export default function Products() {

  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [ products, setProducts ] = useState<IProduct[]>([]);
  const [ categories, setCategories ] = useState<ICategory[]>([])
  const [ brands, setBrands ] = useState<IBrand[]>([])

  const getData = async () => {
    const response = await axios.all([
      instance.get("/category"),
      instance.get("/brand"),
      instance.get("/product")
    ])
    .then(axios.spread((cats, brnds, prods) => {
      setCategories(cats.data);
      setBrands(brnds.data);
      setProducts(prods.data);
    }));
  }

  const handleBrandChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } =  event.target;
    if (checked) {
      setSelectedBrand([...selectedCategories, value]);
    } else {
      setSelectedBrand(
        selectedBrand.filter((brand) => brand !== value)
      );
    }
  };

  const handleCategoryChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } =  event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, value]);
    } else {
      setSelectedPriceRanges(
        selectedPriceRanges.filter((range) => range !== value)
      );
    }
  };

  const filteredProducts = products.filter( (product) => {
    const matchBrand = selectedBrand.length === 0 || selectedBrand.includes(product.brand.name);
    const matchCategory =  selectedCategories.length === 0 || selectedCategories.includes(product.category.name);
    const matchPriceRange = selectedPriceRanges.length === 0 || selectedPriceRanges.some((range) => {
      const [min, max] = range.split('-');
      return Number(product.price) >= Number(min) && Number(product.price) <= Number(max);
    });
    return matchCategory && matchBrand && matchPriceRange;
  });

  useEffect( () => {
    getData();
  }, [])

  return (
    <>
      <PageDescript>
        <h2>Descubra os sabores e aromas dos nossos Whiskys</h2>
        <p>Navegue pela nossa seleção de Bourbon Whiskey, Rye, Tennessee Whiskey e Japanese Whiskey para descobrir novos sabores e aromas que irão impressionar o seu paladar. Se você é um apreciador de um bom whisky ou está apenas começando a explorar o mundo das bebidas destiladas, temos opções para todos os níveis de conhecimento.</p>
      </PageDescript>
      <Filter>
        <details>
          <summary>
            Categoria
          </summary>
          {categories.map((category, index) => <label key={category._id} htmlFor={category.name}>
            <input type="checkbox" value={category.name} onChange={handleCategoryChange} />
            {category.name}
            </label>)}
        </details>
        <details>
          <summary>
            Marca
          </summary>
          {brands.map((brand, index) => <label key={brand._id} htmlFor={brand.name}>
            <input type="checkbox" value={brand.name} onChange={handleCategoryChange} />
            {brand.name}
            </label>)}
        </details>
        <details>
          <summary>
            Preço
          </summary>
          <label htmlFor=""><input type="checkbox" value="0-250" onChange={handlePriceRangeChange} />R$0,00 a R$250,00</label>
          <label htmlFor=""><input type="checkbox" value="250-450" onChange={handlePriceRangeChange} />R$250,00 a R$450,00</label>
          <label htmlFor=""><input type="checkbox" value="450-650" onChange={handlePriceRangeChange}  />R$450,00 a R$650,00</label>
          <label htmlFor=""><input type="checkbox" value="650-" onChange={handlePriceRangeChange} />acima de R$650,00</label>
        </details>
      </Filter>
      <ProductsContainer className="Products">
        {filteredProducts.map((product) => (
          <div key={product._id} className="products__cards">
            <img src={product.picture} alt={product.name} />
            <div className="products__cards-body">
              <h5>{product.name}</h5>
              <p>R$ {product.price}</p> 
              <p>{product.brand.name}</p> 
              <p>{product.category.name}</p>
              <Button state={product} link={`/product/${product._id}`} title="Ir para whisky selecionado" text="Descrição"/>
            </div>
          </div>
        ))}
      </ProductsContainer>
    </>
  );
  ;
}