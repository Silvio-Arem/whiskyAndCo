import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces';
import { instance } from '../requestConfig';

export interface IProductCart {
  product: IProduct,
    quantity: number  
}
interface ICartContext {
  shopCart: {
    product: IProduct,
    quantity: number  
  }[],
  addToCart(producId: IProduct, quantity: number): void,
  removeFromCart(producId: IProduct): void,
  setShopCart(item: IProductCart[]): void 
}

interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext); 

export function CartProvider({ children }: Props) {
  
  const [ shopCart, setShopCart ] = useState<IProductCart[]> ([]);

  const addToCart = (product: IProduct, quantity: number) => {
    let oldCart = shopCart
    console.log(oldCart)
    const newItem = { product, quantity };
    let foundProduct = oldCart.filter(item => item.product.name === product.name)
    if (foundProduct[0]) {
      foundProduct[0].quantity += quantity
      let position = oldCart.indexOf(foundProduct[0])
      oldCart[position] = foundProduct[0];
      setShopCart(oldCart);
    } else {
      setShopCart(prevCart => [...prevCart, newItem]);
      console.log(shopCart)
    }
  }

  const removeFromCart = (product: IProduct) => {
    let oldCart = shopCart
    console.log(oldCart)
    let foundProduct = oldCart.filter(item => item.product.name === product.name)
    let position = oldCart.indexOf(foundProduct[0])
    oldCart.splice(position, 1) 
    setShopCart(oldCart);
    console.log("!!!!removeu!!!!")
  }



  return (
    <CartContext.Provider value={{ shopCart, setShopCart, addToCart, removeFromCart }}>
       {children} 
    </CartContext.Provider>
  )
}