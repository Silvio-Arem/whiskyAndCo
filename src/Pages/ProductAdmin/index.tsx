import React, { useEffect, useState, FormEvent, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../requestConfig';
import axios, { AxiosResponse } from "axios";
import { IProduct, ICategory, IBrand } from '../../interfaces';
import { AuthContext } from '../../Context/AuthContext';
import { StyledSection } from '../Admin/styles';

export default function ProductAdmin() {
  
  const { userToken } = useContext(AuthContext);

  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ categories, setCategories ] = useState<ICategory[]>([])
  const [ brands, setBrands ] = useState<IBrand[]>([])
  const [ product, setProduct ] = useState <IProduct> ({
    name: "",
    category: {_id: "", name: ""},
    brand: {_id: "", name: ""},
    picture: "",
    price: 0,
    description: "",
  });

  const config = {headers: { Authorization: `Bearer ${userToken}`}};

  const getCatsAndBrands = async () => {
    try {
      const response = await axios.all([
        instance.get("/category"),
        instance.get("/brand")
      ])
      .then(axios.spread((cats, brnds) => {
        setCategories(cats.data);
        setBrands(brnds.data)
      }));
    } catch (error) {
      console.log("ERRO: ", error)
    }
  }

  const handleValues = (
    e: React.ChangeEvent<HTMLInputElement> 
    | React.ChangeEvent<HTMLTextAreaElement> 
    | React.ChangeEvent<HTMLSelectElement>
    ) => {
    const { name, value } = e.target;
    setProduct({...product, [name]: value});
  }

  const formHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      let response: AxiosResponse<any, any>;
      const data = {
        ...product,
        category: product.category._id,
        brand: product.brand._id
      };
      delete data._id;
      if(product._id === "") {
        response = await instance.post("/product", data, config);
        alert("Produto criado com sucesso!");
      }
      else {
        response = await instance.put(`/product/${product._id}`, data, config);
        console.log(response);
        alert("Produto atualizado com sucesso!");
      }
      setUpdatedItem(true);
      navigate(-1);

    } catch (error) {
      console.log("ERRO: ", error)
    }
  }

  const removeProduct = async () => {
    const response = await instance.delete(`/product/${product._id}`, config);
    alert("Produto removido com sucesso!");
    navigate(-1);
  }

  useEffect(() => {
    if(state) {
      setProduct(state.item);
    } else {
      setUpdatedItem(false);
    }
    getCatsAndBrands();
  }, [])

  return (
    <StyledSection>
      <h3>Informações do Produto:</h3>
      { 
        updatedItem
        ? (
          <>
            <p>ID do Produto:</p>
            <p>{product._id}</p>
            <p>Nome do Produto:</p>
            <p>{product.name}</p>
            <p>Categoria do Produto:</p>
            {categories.filter((cat) => cat._id === product.category._id).map(item => <p key={item._id}>{item.name}</p>)}
            <p>Marca do Produto:</p>
            {brands.filter((brand) => brand._id === product.brand._id).map(item => <p key={item._id}>{item.name}</p>)}
            <p>Imagens:</p>
            <p>{product.picture}</p>
            <p>Preço do Produto:</p>
            <p>{product.price}</p>
            <p>Descrição do Produto:</p>
            <p>{product.description}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
        <form onSubmit={(e) => formHandler(e)}>
          <p>ID do Produto:</p>
          <p>{product._id ? "ID ainda não gerado" : product._id}</p>
          <label htmlFor="name">Nome do Produto:</label>
          <input name='name' type="text" value={product.name} onChange={(e) => handleValues(e)} />
          <label htmlFor="category">Categoria do Produto:</label>
          <select name="category" value={product.category.name} onChange={(e) => handleValues(e)}>
            <option value="">Categorias</option>
            {categories.map((category) => <option key={category._id} value={category.name}>{category.name}</option> )}
          </select>
          <label htmlFor="brand">Marca do Produto:</label>
          <select name="brand" value={product.brand.name} onChange={(e) => handleValues(e)}>
            <option value="">Marcas</option>
            {brands.map((brand) => <option key={brand._id} value={brand.name}>{brand.name}</option> )}
          </select>
          <label htmlFor="picture">Imagens:</label>
          <input name='picture' type="text" value={product.picture} onChange={(e) => handleValues(e)} />
          <label htmlFor="price">Preço do Produto:</label>
          <input name='price' type="number" value={product.price} onChange={(e) => handleValues(e)} />
          <label htmlFor="description">Descrição do Produto:</label>
          <textarea 
            name="description" 
            cols={60} rows={10}
            value={product.description} 
            onChange={(e) => handleValues(e)}>
          </textarea>
          <input type="submit" value={product._id ? "Salvar" : "Criar"} />
        </form> 
      )}
      <div>
        {!updatedItem && <button onClick={() => setUpdatedItem(!updatedItem)}>Cancelar</button>}
        <button onClick={() => removeProduct()}>Remover</button>
      </div>
    </StyledSection>
  )
}
