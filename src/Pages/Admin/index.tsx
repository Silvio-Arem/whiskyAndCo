import { useState } from "react";
import {users, products, orders } from "../../data";
import { IUser, IProduct, ICategory, IOrder } from "../../interfaces";

export default function Admin() {

  const [ searchType, setSearchType ] = useState("");
  const [ searchInput, setSearchInput ] = useState("");
  const [data, setData ] = useState< IUser[] | null >(null);
  const [ filteredList, setFilteredList ] = useState< IUser[] | null>(null);

  const selectData = (dataType: string) => {

    setSearchType(dataType);

    switch(dataType) {
      // case "products":
      //   return setData(products);

      // case "categories":
      //   return ;

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
    if(data !== null){
      searchInput === ""
      ? setFilteredList(data)
      : setFilteredList(data.filter((item) => 
          item.name.toLowerCase().includes(searchInput.toLowerCase())))
    }
  }

  return (
      <section>
        <h3>Painel do Administrador</h3>
        <div>
          <select name="searchType" onChange={(e) => selectData(e.target.value)}>
            <option value="products">Produtos</option>
            <option value="categories">Categorias</option>
            <option value="users">Usuários</option>
            <option value="orders">Pedidos</option>
          </select>
          <input type="text" name="searchInput" onChange={(e) => updateList(e.target.value)}/>
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