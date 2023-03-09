import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Brand() {
  
  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ brandName, setBrandName ] = useState("");
  
  const requestOptions = {
    method: '',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: brandName })
  };

  const removeBrand = async (id: number) => {
    try {
      requestOptions.method = "DELETE";
      const res = await fetch(`http://localhost:4000/brand/${id}`, requestOptions);
      setUpdatedItem(!updatedItem);
      navigate(-1);  
    } catch (error) {
      return error;
    }
  }

  const addBrand = async () => {
    try {
      requestOptions.method = "POST";
      const res = await fetch(`http://localhost:4000/brand/`, requestOptions);
      setUpdatedItem(!updatedItem);
      navigate(-1);  
    } catch (error) {
      return error;
    }
  }

  const updateBrand = async (id: number) => {
    try {
      requestOptions.method = "PUT";
      const res = await fetch(`http://localhost:4000/brand/`, requestOptions);
      setUpdatedItem(!updatedItem);
      navigate(-1);  
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    if(state) {
      setBrandName(state.name);
    }
    else {
      setUpdatedItem(false);
    }
  }, []);

  return (
    <section>
      <h3>Informações da Marca</h3>
      {
        updatedItem
        ? (
          <>  
            <p>ID da Marca:</p>
            <p>{state.id}</p>
            <p>Nome da Marca:</p>
            <p>{brandName}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
          <>
            <p>ID da Marca:</p>
            <p>{state ? state.id : "ID ainda não gerado"}</p>
            <label htmlFor="brandName">Nome da Categoria:</label>
            <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
            { state === null
              ? <button onClick={() => addBrand()}>Criar</button>
              : <button onClick={() => updateBrand(state.id)}>Salvar</button>
            }
          </>
        )
      }
      <button onClick={() => removeBrand(state.id)}>Remover</button>
    </section>
  )
}