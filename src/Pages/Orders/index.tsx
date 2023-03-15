import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IOrder } from "../../interfaces";

import { StyledOrders } from "./styles";

export default function Orders () {

  const { state } = useLocation();
  const navigate = useNavigate();
  const [ orders, setOrders ] = useState<IOrder[]> ([])

  useEffect(() => {
    if(state) {
      setOrders(state);
    }
  }, [])

  console.log(state);

  return (
    <StyledOrders>
      {/* <h3>Pedidos Realizados</h3>
        {
          orders.map((item) => 
            <article key={item._id} onClick={() => navigate(`${item._id}`, {state : item})}>
              <p>Data do Pedido: {item.createdAt}</p>
            </article>             
          )
        } */}
    </StyledOrders>
  )
}
