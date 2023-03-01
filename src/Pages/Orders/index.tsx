import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { orders } from "../../data";
import { IOrder } from "../../interfaces";

export default function Orders () {

  const { state } = useLocation();
  const navigate = useNavigate();

  const orderList = orders.filter((order, index) => order.id === state.userOrders[index]);

  useEffect(() => {
    
  }, [])

  return (
    <section>
      <h3>Pedidos:</h3>
        {
          orderList.map((item, index) => 
            <article key={index} onClick={() => navigate(`${item.id}`, {state : item})}>
              <p>Data do Pedido: {item.orderDate}</p>
            </article>             
          )
        }
    </section>
  )
}
