import React from 'react'
import { useLocation } from 'react-router-dom';
import { products } from "../../data";
import { IOrder, IProduct } from "../../interfaces";

export default function Order  () {

  const { state } = useLocation();
  const currentOrder: IOrder =  state;

  const list: IProduct[] = products.filter((product, i) => product.id === currentOrder.productsList[i].productID);

  return (
    <section>
      <h3>Id do Pedido: {currentOrder.id}</h3>
      <p>Data do Pedido: {currentOrder.orderDate}</p>
      <article>
        {
          list
          .map((item, index) => 
            <div key={index}>
              <p>{item.name}</p>
              <p>{currentOrder.productsList[index].quantity}</p>
              <p>Valor: {item.price * currentOrder.productsList[index].quantity}</p>
            </div>
          )
        }
      </article>
    <p>Total da compra: {currentOrder.totalPrice}</p>
    </section>
  )
}
