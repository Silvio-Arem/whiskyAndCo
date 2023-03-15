import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { IOrder, IProduct } from "../../interfaces";
import { instance } from '../../requestConfig';
import { StyledOrder } from "./styles";

export default function Order () {

  const { state } = useLocation();
  const { userToken } = useContext(AuthContext);

  const currentOrder: IOrder = state.item;

  const [ list, setList ] = useState<IProduct[]>([])
  const [ order, setOrder ] = useState<IOrder>({
    userId: { _id: "", name: ""},
    products: [],
    amount: 0,
  })

  const config = {headers: { Authorization: `Bearer ${userToken}`}};

  const getProducts = async () => {
    const response = await instance.get("/product");
    const products: IProduct[] = response.data;
    setList(products);
  }

  const cancelOrder = async () => {
    try {
      const response = await instance.delete(`/order/${currentOrder._id}`, config);
      alert("Pedido Cancelado com sucesso!");
    } catch (error) {
      console.log("ERRO: ", error);
    }

  }

 useEffect(() => {
  if(currentOrder) {
    getProducts();
  }
 }, []);

  return (
    <StyledOrder>
      <h3>Id do Pedido: {currentOrder._id}</h3>
      <p>Data do Pedido: {currentOrder.createdAt}</p>
      <article>
        {currentOrder.products.map((orderProduct) => {
            const product = list.find((product) => product._id === orderProduct._id);
            if (!product) {
              return <p key={orderProduct._id}>Produto não encontrado</p>;
            }
            return (
              <div key={orderProduct._id}>
                <p>{product.picture}</p>
                  <p>{product.name}</p>
                  <p>{orderProduct.quantity}</p>
                  <p>Valor: {product.price * orderProduct.quantity}</p>
              </div>
            );
          })}
      </article>
      <p>Total da compra: {currentOrder.amount}</p>
      <button onClick={() => cancelOrder()}>Cancelar Pedido</button>
    </StyledOrder>
  )
}
