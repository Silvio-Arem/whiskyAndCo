import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { orders, products } from "../../data";
import { IOrder } from "../../interfaces";

export default function Orders () {

  const { state } = useLocation();
  const navigate = useNavigate();

  const orderList = orders.filter((order, index) => order.id === state.userOrders[index]);

  useEffect(() => {
    
  }, [])

  return (
    <section>
      <h3>Pedidos Realizados</h3>
        {
          orderList.map((item) => 
            <article key={item.id} onClick={() => navigate(`${item.id}`, {state : item})}>
              <p>Data do Pedido: {item.orderDate}</p>
            </article>             
          )
        }
    </section>
  )
}