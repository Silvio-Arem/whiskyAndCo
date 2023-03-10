import React, { useEffect, useState, FormEvent, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../requestConfig';
import { AxiosResponse } from "axios";
import { IProduct } from '../../interfaces';
import { AuthContext } from '../../Context/AuthContext';

export default function ProductAdmin() {
  
  const { userToken } = useContext(AuthContext);

  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
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
      setUpdatedItem(false);
    }
  }, [])

  const handleValues = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({...product, [name]: value});
  }

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    let response: AxiosResponse<any, any>;

    if(product._id === "") {
      delete product._id;
      response = await instance.post("/product", {
        headers: {
          Authorization: `Bearer ${userToken}`
        },
        data: { product }
      });
      alert("Produto criado com sucesso!");
    }
    else {
      response = await instance
        .put(`/product/${product._id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`
          },
          data: { product }
        });
      alert("Produto atualizado com sucesso!");
    }
    setUpdatedItem(true);
    navigate(-1);
  }

  const removeProduct = () => {

  }


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
            <p>{product?.category.name}</p>
            <p>Marca do Produto:</p>
            <p>{product?.brand.name}</p>
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
          <p>{product._id === "" ? "ID ainda não gerado" : product._id}</p>
          <label htmlFor="name">Nome do Produto:</label>
          <input name='name' type="text" value={product.name} onChange={(e) => handleValues(e)} />
          <label htmlFor="category">Categoria do Produto:</label>
          <input name='category' type="text" value={product.category.name} onChange={(e) => handleValues(e)} />
          <label htmlFor="category">Marca do Produto:</label>
          <input name='category' type="text" value={product.brand.name} onChange={(e) => handleValues(e)} />
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
          <input type="submit" value={product._id === "" ? "Criar" : "Salvar"} />
        </form> 
      )}  
      <button onClick={() => removeProduct()}>Remover</button>
    </section>
  )
}
