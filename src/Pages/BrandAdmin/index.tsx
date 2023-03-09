import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { baseURL, requestOptions } from '../../requestConfig';

export default function BrandAdmin() {
  
  const { userToken } = useContext(AuthContext) 
  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ brand, setBrand ] = useState({
    id: 0,
    name: ""
  });

  const removeBrand = async (id: number) => {
    try {
      requestOptions.method = "DELETE";
      const res = await fetch(baseURL + `/${brand.id}`, requestOptions);
      setUpdatedItem(!updatedItem);
      navigate(-1);  
    } catch (error) {
      return error;
    }
  }

  const addBrand = async () => {
    try {
      requestOptions.method = "POST";
      requestOptions.headers.Authorization = `Bearer ${userToken}`;
      requestOptions.body = JSON.stringify({name: brand.name})
      const res = await fetch(baseURL + "/brand", requestOptions);
      setUpdatedItem(!updatedItem);
      alert("Item Adicionado!");
      navigate(-1);  
    } catch (error) {
      return error;
    }
  }

  const updateBrand = async (id: number) => {
    try {
      requestOptions.method = "PUT";
      const res = await fetch(baseURL + `/${brand.id}`, requestOptions);
      setUpdatedItem(!updatedItem);
      navigate(-1);  
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    if(state) {
      setBrand(state);
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
            <p>{brand.id}</p>
            <p>Nome da Marca:</p>
            <p>{brand.name}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
          <>
            <p>ID da Marca:</p>
            <p>{brand.id === 0 ? "ID ainda não gerado" : brand.id}</p>
            <label htmlFor="brandName">Nome da Marca:</label>
            <input name="name" type="text" value={brand.name} onChange={(e) => setBrand({...brand, name: e.target.value})}/>
            { state === null
              ? <button onClick={() => addBrand()}>Criar</button>
              : <button onClick={() => updateBrand(brand.id)}>Salvar</button>
            }
          </>
        )
      }
      <button onClick={() => removeBrand(state.id)}>Remover</button>
    </section>
  )
}