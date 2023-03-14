import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces';
import { instance } from '../requestConfig';

interface ICartContext {
  shopCart: {
    product: IProduct,
    quantity: number  
  }[],
  addToCart(producId: IProduct, quantity: number): void,
  removeFromCart(producId: IProduct): void,
}

interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext); 

export function CartProvider({ children }: Props) {
  
  const [ shopCart, setShopCart ] = useState ([]);

  const addToCart = (producId: IProduct, quantity: number) => {
    console.log(producId, quantity);
  }

  const removeFromCart = (producId: IProduct) => {

  }

  return (
    <CartContext.Provider value={{ shopCart, addToCart, removeFromCart }}>
       {children} 
    </CartContext.Provider>
  )
}