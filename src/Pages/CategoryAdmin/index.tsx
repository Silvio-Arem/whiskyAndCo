import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { categories } from '../../data';
import { ICategory } from '../../interfaces';

export default function Category() {
  
  const { state } = useLocation();
  const navigate = useNavigate();

  const [ updatedItem, setUpdatedItem ] = useState (true);
  const [ updateValue, setUpdateValue ] = useState (false); 
  const [ catValue, setCatValue ] = useState ("");
  const [ catName, setCatName ] = useState("");
  const [ categoryValues, setCategoryValues ] = useState <string[]> ([]);
  
  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setUpdatedItem(true);
      const category = {catName, categoryValues};
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category)
      };
      const res = await fetch("http://localhost:4000/category", requestOptions);
      navigate(-1);  
    } catch (error) {
      
    }
  }

  const removeCategory = (id: number) => {
    console.log(id);
  }

  const addCatValue = () => {
    if(updateValue && catValue !== "") {
      const items = [...categoryValues, catValue];
      setCategoryValues(items);
      setUpdateValue(false);
      setCatValue("");
    }
    else {
      setUpdateValue(true);
    }
  }

  useEffect(() => {
    if(state) {
      const item = categories[state.id-1]
      setCatName(item.name);
      setCategoryValues(item.categoryValues);
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
            <p>{catName}</p>
            <p>Valores Associados:</p>
            <ul>
              {
                categoryValues
                .map((item, index) =>
                  <li key={index}>
                    {item}
                  </li>
                )
              }
            </ul>
            <button onClick={() => setUpdatedItem(!updatedItem)}>Atualizar</button>
          </>
        )
        : (
          <form onSubmit={(e) => formHandler(e)}>
            <label htmlFor="name">Nome da Categoria:</label>
            <input type="text" value={catName} onChange={(e) => setCatName(e.target.value)} />
            {
              categoryValues.map((item, index) =>
                <div key={index}>
                  <p>{item}</p>
                  <button onClick={(e) => setCategoryValues(categoryValues.filter((item, i) => i !== index))}>
                    Remover Valor
                  </button>
                </div>
              )
            }
            <input type="submit" value="Finalizar"/>
          </form>
        )
      }
      {updateValue && <input type="text" value={catValue} onChange={(e) => setCatValue(e.target.value)}/> }
      {!updatedItem && 
        <button onClick={() => addCatValue()} disabled={updateValue && catValue === ""}>
          {updateValue ? "Salvar Valor" : "Adicionar Valor"}
        </button>
      }
      <button onClick={() => removeCategory(state.id)}>Remover</button>
    </section>
  )
}
