import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../../data';
import { IProduct } from '../../interfaces';

export default function ProductAdmin() {
  
  const { state } = useLocation();

  const [ updatedItem, setUpdatedItem ] = useState <boolean> (true);
  const [ product, setProduct ] = useState <IProduct> ({
    id: 0,
    name: "",
    category: "",
    img: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    if(state) {
      setProduct(products[state.id--]);
    }
    else {
      setUpdatedItem(false);
    }
  }, [])

  const handleValues = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
      setProduct({...product, [name]: value});
  }

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdatedItem(true);
  }

  const removeProduct = (id: number) => {
    console.log(id);
  }

  return (
    <section>
      { 
        updatedItem
        ? (
          <div>
            <p>ID do Produto:</p>
            <p>{product.id}</p>
            <p>Nome do Produto:</p>
            <p>{product.name}</p>
            <p>Categoria do Produto:</p>
            <p>{product.category}</p>
            <p>Imagens:</p>
            <p>{product.img}</p>
            <p>Preço do Produto:</p>
            <p>{product.price}</p>
            <p>Descrição do Produto:</p>
            <p>{product.description}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar Dados</button>
          </div>
        )
        : (
        <form onSubmit={(e) => formHandler(e)}>
          <label htmlFor="name">Nome do Produto:</label>
          <input type="text" value={product.name} onChange={(e) => handleValues(e)} />
          <label htmlFor="email">Categoria do Produto:</label>
          <input type="text" value={product.category} onChange={(e) => handleValues(e)} />
          <label htmlFor="cpf">Imagens:</label>
          <input type="text" value={product.img} onChange={(e) => handleValues(e)} />
          <label htmlFor="address">Preço do Produto:</label>
          <input type="text" value={product.price} onChange={(e) => handleValues(e)} />
          <label htmlFor="description">Descrição do Produto:</label>
          <textarea 
            name="description" 
            cols={60} rows={10}
            value={product.description} 
            onChange={(e) => handleValues(e)}>
          </textarea>
          <input type="submit" value="Salvar" />
        </form> 
      )}  
      <button onClick={() => removeProduct(product.id)}>Excluir</button>
    </section>
  )
}
