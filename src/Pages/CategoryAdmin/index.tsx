import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { instance } from '../../requestConfig';
import { AxiosResponse } from "axios";
import { StyledSection } from '../Admin/styles';

export default function CategoryAdmin() {
  
  const { userToken } = useContext(AuthContext);
  
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [ updatedItem, setUpdatedItem ] = useState(true);
  const [ category, setCategory ] = useState({
    _id: "",
    name: ""
  });

  const categoryRequest = async (op: string) => {
    let response: AxiosResponse<any, any>;
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      data: { name: category.name }
    }
    switch(op) {
      case "create":
        response = await instance.post("/category", config);
        alert("Marca criada com sucesso!");
        return navigate(-1);
      
      case "update":
        response = await instance.put(`/category/${category._id}`, config);
        alert("Marca atualizada com sucesso!");
        setUpdatedItem(false);
        return navigate(-1);

      case "delete":
        response = await instance.delete(`/category/${category._id}`, config);
        alert("Marca removida com sucesso!");
        return navigate(-1);

      default:
        break;
    }
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
            <span>{category._id}</span>
            <p>Nome da Categoria:</p>
            <p>{category.name}</p>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </div>
        )
        : (
          <>
            <p>ID da Categoria:</p>
            <p>{category._id === "" ? "ID ainda não gerado" : category._id}</p>
            <div>
              <label htmlFor="categoryName">Nome da Categoria:</label>
              <input name="name" 
                type="text" 
                value={category.name} 
                onChange={(e) => setCategory({...category, name: e.target.value})}
              />
            </div>
            { state === null
              ? <button onClick={() => categoryRequest("create")}>Criar</button>
              : <button onClick={() => categoryRequest("update")}>Salvar</button>
            }
          </>
        )
      }
      <button onClick={() => categoryRequest("delete")}>Remover</button>
    </StyledSection>
  )
}
