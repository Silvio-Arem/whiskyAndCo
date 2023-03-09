import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledSection } from '../Admin/styles';

export default function CategoryAdmin() {
  
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ category, setCategory ] = useState({
    id: 0,
    name: ""
  });
  
  const requestOptions = {
    method: '',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: category })
  };

  const removeCategory = async (id: number) => {
    requestOptions.method = "DELETE";
    const res = await fetch(`http://localhost:4000/category/${id}`, requestOptions);
    navigate(-1);
  }

  const addCategory = async () => {
    requestOptions.method = "POST";
    const res = await fetch("http://localhost:4000/category", requestOptions);
    setUpdatedItem(false);
    navigate(-1);
  }

  const updateCategory = async (id: number) => {
    requestOptions.method = "PUT";
    const res = await fetch(`http://localhost:4000/category/${id}`, requestOptions);
    setUpdatedItem(false);
    navigate(-1);
  }

  useEffect(() => {
    if(state) {
      setCategory(state);
    }
    else {
      setUpdatedItem(false);
    }
  }, []);

  console.log(category.name);

  return (
    <StyledSection>
      <h3>Informações da Categoria</h3>
      {
        updatedItem
        ? (
          <div>  
            <p>ID da Categoria:</p>
            <span>{category.id}</span>
            <p>Nome da Categoria:</p>
            <p>{category.name}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </div>
        )
        : (
          <>
            <p>ID da Categoria:</p>
            <p>{category.id === 0 ? "ID ainda não gerado" : category.id}</p>
            <div>
              <label htmlFor="categoryName">Nome da Categoria:</label>
              <input name="name" 
                type="text" 
                value={category.name} 
                onChange={(e) => setCategory({...category, name: e.target.value})}
              />
            </div>
            { state === null
              ? <button onClick={() => addCategory()}>Criar</button>
              : <button onClick={() => updateCategory(category.id)}>Salvar</button>
            }
          </>
        )
      }
      <button onClick={() => removeCategory(state.id)}>Remover</button>
    </StyledSection>
  )
}
