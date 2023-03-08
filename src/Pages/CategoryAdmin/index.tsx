import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ICategory } from '../../interfaces';

export default function CategoryAdmin() {
  
  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ categoryName, setCategoryName ] = useState("");
  

  const removeCategory = async (id: number) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoryName)
    };
    const res = await fetch(`http://localhost:4000/category/${id}`, requestOptions);
    navigate(-1);
  }

  const addCategory = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoryName)
    };
    const res = await fetch("http://localhost:4000/category", requestOptions);
    console.log(res);
    setUpdatedItem(false);
    navigate(-1);
  }

  const updateCategory = async (id: number) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoryName)
    };
    const res = await fetch(`http://localhost:4000/category/${id}`, requestOptions);
    setUpdatedItem(false);
    navigate(-1);
  }

  useEffect(() => {
    if(state) {
      setCategoryName(state.name);
    }
    else {
      setUpdatedItem(false);
    }
  }, []);

  return (
    <section>
      <h3>Informações da Categoria</h3>
      {
        updatedItem
        ? (
          <>  
            <p>ID da Categoria:</p>
            <p>{state?.id}</p>
            <p>Nome da Categoria:</p>
            <p>{categoryName}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
          <>
            <p>ID da Categoria:</p>
            <p>{state ? state.id : "ID ainda não gerado"}</p>
            <label htmlFor="categoryName">Nome da Categoria:</label>
            <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
            { state === null
              ? <button onClick={() => addCategory()}>Salvar</button>
              : <button onClick={() => updateCategory(state.id)}>Atualizar</button>
            }
          </>
        )
      }
      <button onClick={() => removeCategory(state.id)}>Remover</button>
    </section>
  )
}
