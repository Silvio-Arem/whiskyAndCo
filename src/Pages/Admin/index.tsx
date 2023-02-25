import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {users, products, orders, categories } from "../../data";
import { Data } from "../../interfaces";

export default function Admin() {

  const [ searchType, setSearchType ] = useState <string> ("");
  const [ searchInput, setSearchInput ] = useState <string> ("");
  const [ data, setData ] = useState < Data[] | null > (null);
  const [ filteredList, setFilteredList ] = useState < Data[] | null > (null);

  const location = useLocation();

  useEffect(() => {

  }, [searchType]);

  const selectData = (dataType: string) => {

    setSearchType(dataType);
    setSearchInput("");
    setFilteredList(null);

    switch(dataType) {
      case "products":
        return setData(products);

      case "categories":
        return setData(categories);

      case "users":
        return setData(users);

      case "orders":
        return setData(orders);
      
      default:
        break;
    }
  }

  const updateList = (search: string) => {
    setSearchInput(search);
    const filtered = search !== "" && data !== null
      ? data.filter(item => 
          searchType === "orders" 
          ? item.id.toString() === search
          : item.name.toLowerCase().includes(search.toLowerCase()))
      : data
    setFilteredList(filtered);
  }

  return (
      <section>
        <h3>Painel do Administrador</h3>
        <div>
          <select name="searchType" value={searchType} onChange={(e) => selectData(e.target.value)}>
            <option value="">Selecione um tipo</option>
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
                <li key={index}>
                  <Link to={`${searchType}/${index}`}>
                    {searchType === "orders" ? item.id : item.name}
                  </Link>
                </li>
            ))
            : (
              data?.map((item, index) => 
                <li key={index}>
                  <Link to={`${searchType}/${index+1}`} state={{id: index+1, dataType: searchType}}>
                    {searchType === "orders" ? item.id : item.name}
                  </Link>
                </li>
            ))
          }
        </ul>
      </section>
  );
}