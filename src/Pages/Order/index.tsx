import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IOrder, IProduct } from "../../interfaces";

export default function Order () {

  const { state } = useLocation();
  const currentOrder: IOrder = state;
  let list: IProduct[];

 useEffect(() => {
 })

  return (
    <section>
      <h3>Id do Pedido: {currentOrder._id}</h3>
      <p>Data do Pedido: {currentOrder.orderDate}</p>
      <article>
        {
          currentOrder.productsList
          .map((item, index) => 
            <div key={index}>
              {/* <p>{products[]}</p>
              <p>{currentOrder.productsList[index].quantity}</p>
              <p>Valor: {item.price * currentOrder.productsList[index].quantity}</p> */}
            </div>
          )
        }
      </article>
    <p>Total da compra: {currentOrder.amount}</p>
    </section>
  )
}
