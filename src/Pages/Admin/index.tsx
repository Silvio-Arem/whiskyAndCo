import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";
import { instance } from "../../requestConfig";
import { Data } from "../../interfaces";
import { AuthContext } from "../../Context/AuthContext";

import { StyledSection } from "./styles";

export default function Admin() {

  const navigate = useNavigate();
  const location = useLocation();

  const [ searchType, setSearchType ] = useState <string> ("");
  const [ searchInput, setSearchInput ] = useState <string> ("");
  const [ data, setData ] = useState <Data[]> ([]);
  const [ filteredList, setFilteredList ] = useState <Data[]> ([]);

  const { userToken } = useContext(AuthContext);

  const selectData = async (dataType: string) => {

    const config = { headers: { Authorization: `Bearer ${userToken}`}};
    setSearchType(dataType);
    setSearchInput("");
    setFilteredList([]);
    let response: AxiosResponse<any, any>;

    switch(dataType) {
      case "products":
        response = await instance.get("/product");
        return setData(response.data);

      case "categories":
        response = await instance.get("/category");
        return setData(response.data); 

      case "users":
        response = await instance.get("/user", config);
        return setData(response.data);

      case "orders":
        response = await instance.get("/order", config);
        return setData(response.data);

      case "brands":
        response = await instance.get("/brand");
        return setData(response.data);
      
      default:
        break;
    }
  }

  const updateList = (search: string) => {
    setSearchInput(search);
    if(search !== "") {}
    const filtered = search !== ""
      ? data.filter(item => 
          searchType === "orders" 
          ? item._id?.includes(search.toLowerCase())
          : item.name.toLowerCase().includes(search.toLowerCase()))
      : []
    setFilteredList(filtered);
  }

  return (
      <StyledSection>
        <h3>Painel do Administrador</h3>
        <p>Faça todas as operações sobre os tipos disponíveis</p>
        <div>
          <select name="searchType" value={searchType} onChange={(e) => selectData(e.target.value)}>
            <option value="">Selecione o tipo</option>
            <option value="users">Usuários</option>
            <option value="products">Produtos</option>
            <option value="categories">Categorias</option>
            <option value="brands">Marcas</option>
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
              filteredList.map((item, index) =>
                <li key={index}>
                  <Link to={`${searchType}/${item._id}`}>
                    {searchType === "orders" ? item._id : item.name}
                  </Link>
                </li>
            ))
            : (
              data.map((item, index) => 
                <li key={index}>
                  <Link to={`${searchType}/${item._id}`} state={{item: item}}>
                    {searchType === "orders" ? item._id : item.name}
                  </Link>
                </li>
            ))
          }
        </ul>
      </StyledSection>
  );
}