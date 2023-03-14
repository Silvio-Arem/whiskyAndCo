import React, { useContext, useState, useEffect } from "react";
import axios from "axios"
import { instance } from "../../requestConfig";
import { IOrder, IProduct } from "../../interfaces";
import { Main } from "./styles";
import { useLocation } from "react-router-dom";

export default function SucessPage ()  {

    const { state } = useLocation();
    const order: IOrder = state;
    let list: IProduct[];

    const getProducts = async () => {
        const response = await instance.get("/product");
        const productsList = response.data;
        const list = order.products
          .forEach(element => {
            productsList.filter((item: IProduct) => element.productId === item._id)
        });
      }
    
     useEffect(() => {
      if(order) {
        getProducts();
      }
     }, []);

    return(
        <Main>
            <h3>Pedido realizado com sucesso</h3>
            <p>Status da compra:</p>
            <p>ID do Pedido: {order._id}</p>
            <ul>
            {order.products.map((product, index) => (
                <div key={index}>
                <li>{list[index].name}</li>
                <li>{list[index].picture}</li>
                <li>{list[index].price}</li>
                </div>
                
             
                ))}
                </ul>
        </Main>
        
    )
}
