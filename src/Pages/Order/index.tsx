import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IOrder, IProduct } from "../../interfaces";
import { instance } from '../../requestConfig';

export default function Order () {

  const { state } = useLocation();
  const currentOrder: IOrder = state;
  let list: IProduct[];

  const getProducts = async () => {
    const response = await instance.get("/product");
    const productsList = response.data;
    const list = currentOrder.products
      .forEach(element => {
        productsList.filter((item: IProduct) => element.productid === item._id)
    });
  }

 useEffect(() => {
  if(currentOrder) {
    getProducts();
  }
 }, []);



  return (
    <section>
      <h3>Id do Pedido: {currentOrder._id}</h3>
      <p>Data do Pedido: {currentOrder.createdAt}</p>
      <article>
        {
          currentOrder.products
          .map((item, index) => 
            <div key={index}>
              <p>{}</p>
              <p>{currentOrder.products[index].quantity}</p>
              <p>Valor: {list[index].price * currentOrder.products[index].quantity}</p>
            </div>
          )
        }
      </article>
    <p>Total da compra: {currentOrder.amount}</p>
    </section>
  )
}
