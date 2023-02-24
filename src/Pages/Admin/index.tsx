import { useState, useEffect } from "react";
import {users, products, orders, categories } from "../../data";
import { Data } from "../../interfaces";

export default function Admin() {

  const [ searchType, setSearchType ] = useState <string> ("users");
  const [ searchInput, setSearchInput ] = useState <string> ("");
  const [data, setData ] = useState < Data[] | null > (null);
  const [ filteredList, setFilteredList ] = useState < Data[] | null > (null);


  useEffect(() => {
    selectData(searchType);
  }, []);

  const selectData = (dataType: string) => {

    setSearchType(dataType);

    switch(dataType) {
      case "products":
        return setData(products);

      case "categories":
        return setData(categories);

      case "users":
        return setData(users);

      // case "orders":
      //   return setData(orders);
      
      default:
        break;
    }
  }

  const updateList = (search: string) => {
    setSearchInput(search);
    const filtered = search !== "" && data !== null
      ? (data.filter(item => 
          item.name.toLowerCase().includes(search.toLowerCase())))
      : data
    setFilteredList(filtered);
  }

  return (
      <section>
        <h3>Painel do Administrador</h3>
        <div>
          <select name="searchType" value={searchType} onChange={(e) => selectData(e.target.value)}>
            <option value="users">Usuários</option>
            <option value="products">Produtos</option>
            <option value="categories">Categorias</option>
            <option value="orders">Pedidos</option>
          </select>
          <input 
            type="text" 
            name="searchInput"
            value={searchInput}
            onChange={(e) => updateList(e.target.value)}/>
        </div>
        <ul>
          {
            filteredList !== null
            ? (
              filteredList.map((item, index) =>
                <li key={index}>{item.name}</li>
            ))
            : (
              data?.map((item, index) => 
                <li key={index}>{item.name}</li>
            ))
          }
        </ul>
      </section>
  );
}