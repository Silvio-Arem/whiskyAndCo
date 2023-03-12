import React, { useEffect, useState, FormEvent, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../requestConfig';
import { AxiosResponse } from "axios";
import { IProduct, ICategory, IBrand } from '../../interfaces';
import { AuthContext } from '../../Context/AuthContext';

export default function ProductAdmin() {
  
  const { userToken } = useContext(AuthContext);

  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ categories, setCategories ] = useState<ICategory[]>([])
  const [ brands, setBrands ] = useState<ICategory[]>([])
  const [ product, setProduct ] = useState <IProduct> ({
    name: "",
    category: "",
    brand: "",
    picture: "",
    price: 0,
    description: "",
  });
  const axiosConfig = {headers: { Authorization: `Bearer ${userToken}`}, data: { product }}

  const getCatsAndBrands = async () => {
    try {
      const response = await Promise.all([
        instance.get("/category"),
        instance.get("/brand")
      ]);
      setCategories(response[0].data);
      setBrands(response[1].data)
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
      const itemId = product._id;
      delete product._id;

      if(!itemId) {
        response = await instance.post("/product", axiosConfig);
        alert("Produto criado com sucesso!");
      }
      else {
        response = await instance.put(`/product/${itemId}`, axiosConfig);
        alert("Produto atualizado com sucesso!");
      }
      setUpdatedItem(true);
      navigate(-1);

    } catch (error) {
      console.log("ERRO: ", error)
    }
  }

  const removeProduct = async () => {
    const itemId = product._id;
    delete product._id;
    const response = await instance.delete(`/product/${itemId}`, axiosConfig)
    alert("Produto removido com sucesso!");
    navigate(-1);
  }

  useEffect(() => {
    if(state) {
      setProduct(state);
    } else {
      setUpdatedItem(false);
    }
    getCatsAndBrands();
  }, [])

  return (
    <section>
      { 
        updatedItem
        ? (
          <>
            <p>ID do Produto:</p>
            <p>{product._id}</p>
            <p>Nome do Produto:</p>
            <p>{product.name}</p>
            <p>Categoria do Produto:</p>
            {/* <p>{categories.at(product._id === cat._id)}</p> */}
            <p>Marca do Produto:</p>
            <p>{product.brand}</p>
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
          <select name="category" value={product.category} onChange={(e) => handleValues(e)}>
            <option value="">Categorias</option>
            {categories.map((category) => <option key={category._id} value={category.name}>{category.name}</option> )}
          </select>
          <label htmlFor="brand">Marca do Produto:</label>
          <select name="brand" value={product.brand} onChange={(e) => handleValues(e)}>
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
          <input type="submit" value={product._id ? "Criar" : "Salvar"} />
        </form> 
      )}  
      <button onClick={() => removeProduct()}>Remover</button>
    </section>
  )
}
