import React from 'react'
import { useLocation } from 'react-router-dom';
import { IOrder } from "../../interfaces";


export default function Order () {

  const { state } = useLocation();
  const userOrder = state.item;
  return (
    <section>
      <h3>Id do Pedido: {userOrder.id}</h3>

    </section>
  )
}
