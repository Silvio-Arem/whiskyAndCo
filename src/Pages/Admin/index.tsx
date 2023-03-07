import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {users, products, orders, categories } from "../../data";
import { Data } from "../../interfaces";

export default function Admin() {

  const navigate = useNavigate();
  const location = useLocation();

  const [ searchType, setSearchType ] = useState <string> ("");
  const [ searchInput, setSearchInput ] = useState <string> ("");
  const [ data, setData ] = useState <Data[]> ([]);
  const [ filteredList, setFilteredList ] = useState <Data[]> ([]);

  // useEffect(() => {
  //   window.history.replaceState(null, "", `${location.pathname}/${searchType}`);
  // }, [searchType]);

  const selectData = (dataType: string) => {

    setSearchType(dataType);
    setSearchInput("");
    setFilteredList([]);

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
    const filtered = search !== ""
      ? data.filter(item => 
          searchType === "orders" 
          ? item.id.toString() === search
          : item.name.toLowerCase().includes(search.toLowerCase()))
      : []
    setFilteredList(filtered);
  }

  return (
      <section>
        <h3>Painel do Administrador</h3>
        <p>Faça todas as operações sobre os tipos disponíveis</p>
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
        {searchType !== "" && <button onClick={() => navigate(`${searchType}/new`)}>Criar</button>}
        <ul>
          {
            filteredList.length > 0
            ? (
              filteredList.map((item) =>
                <li key={item.id}>
                  <Link to={`${searchType}/${item.id}`}>
                    {searchType === "orders" ? item.id : item.name}
                  </Link>
                </li>
            ))
            : (
              data.map((item) => 
                <li key={item.id}>
                  <Link to={`${searchType}/${item.id}`} state={{id: item.id, dataType: searchType}}>
                    {searchType === "orders" ? item.id : item.name}
                  </Link>
                </li>
            ))
          }
        </ul>
      </section>
  );
}