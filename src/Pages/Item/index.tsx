import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Data } from '../../interfaces';
import { users, products, categories, orders } from "../../data";

export const Item = () => {

  const { state } = useLocation();
  const [ item, setItem ] = useState <Data | undefined>(undefined); 
  const index = state.id--;

  useEffect( () => {
    if(state.dataType === "users") {
      setItem(users[index]);
    }
    if(state.dataType === "products") {
      setItem(products[index]);
    }
    if(state.dataType === "categories") {
      setItem(categories[index]);
    }
    if(state.dataType === "orders") {
      setItem(orders[index]);
    }
    
  }, [state]);


  console.log(item);

  return (
    <div>{item?.name}</div>
  )
}
