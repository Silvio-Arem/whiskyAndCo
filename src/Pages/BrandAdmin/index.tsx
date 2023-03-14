import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosResponse } from "axios";
import { instance } from '../../requestConfig';
import { AuthContext } from '../../Context/AuthContext';
import { StyledSection } from '../Admin/styles';

export default function BrandAdmin() {
  
  const { userToken } = useContext(AuthContext);

  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ brand, setBrand ] = useState({
    _id: "",
    name: "",
  });

  const brandRequest = async (op: string) => {
    let response: AxiosResponse<any, any>;
    const config = { headers: { Authorization: `Bearer ${userToken}` }};
    const data = {name: brand.name};
    switch(op) {
      case "create":
        response = await instance.post("/brand", data, config);
        alert("Marca criada com sucesso!");
        return navigate(-1);
      
      case "update":
        response = await instance.put(`http://localhost:4000/brand/${brand._id}`, data, config);
        alert("Marca atualizada com sucesso!");
        setUpdatedItem(false);
        return navigate(-1);

      case "delete":
        response = await instance.delete(`/brand/${brand._id}`, config);
        alert("Marca removida com sucesso!");
        return navigate(-1);

      default:
        break;
    }
  }

  useEffect(() => {
    if(state) {
      setBrand(state.item);
    }
    else {
      setUpdatedItem(false);
    }
  }, []);

  return (
    <StyledSection>
      <h3>Informações da Marca</h3>
      {
        updatedItem
        ? (
          <>  
            <p>ID da Marca:</p>
            <p>{brand._id}</p>
            <p>Nome da Marca:</p>
            <p>{brand.name}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
          <>
            <p>ID da Marca:</p>
            <p>{brand._id === "" ? "ID ainda não gerado" : brand._id}</p>
            <label htmlFor="brandName">Nome da Marca:</label>
            <input name="name" type="text" value={brand.name} onChange={(e) => setBrand({...brand, name: e.target.value})}/>
            { state === null
              ? <button onClick={() => brandRequest("create")}>Criar</button>
              : <button onClick={() => brandRequest("update")}>Salvar</button>
            }
          </>
        )
      }
      <div>
      {!updatedItem && <button onClick={() => setUpdatedItem(!updatedItem)}>Cancelar</button>}
      <button onClick={() => brandRequest("delete")}>Remover</button>
      </div>
    </StyledSection>
  )
}