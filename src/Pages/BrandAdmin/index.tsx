import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IBrand } from '../../interfaces';

export default function Brand() {
  
  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ brandName, setBrandName ] = useState("");
  

  const removeBrand = (id: number) => {
    console.log(id);
  }

  const addBrand = async () => {

  }

  const updateBrand = async (id: number) => {
    setUpdatedItem(!updatedItem)
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
            <p>ID da Categoria:</p>
            <p>{state.id}</p>
            <p>Nome da Categoria:</p>
            <p>{brandName}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
          <>
            <p>ID da Marca:</p>
            <p>{state ? state.id : "ID ainda não gerado"}</p>
            <label htmlFor="BrandName">Nome da Categoria:</label>
            <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
            <button onClick={() => updateBrand(state.id)}>Salvar</button>

          </>
        )
      }
      {<button onClick={() => addBrand()}>Adicionar</button>}
      <button onClick={() => removeBrand(state.id)}>Remover</button>
    </section>
  )
}