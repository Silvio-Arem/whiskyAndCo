import React, { useContext, useState, useEffect } from "react";
import axios from "axios"
import { instance } from "../../requestConfig";
import { IProduct } from "../../interfaces";
import { Main } from "./styles";

function ProductList(){
    return instance.get("/sucess")
}



export default function SucessPage ()  {
    const [product, setProduct] = useState<IProduct[]>([])

    useEffect(() =>{
        const getData = async () => {
            try{
          const response = await ProductList()
          setProduct(response.data)
            }catch (error){
                alert("erro")
            }
        }
        getData()
    }, [setProduct])

    return(
        <Main>
            <h3>Pedido realizado com sucesso</h3>
            <p>Status da compra:</p>
            <ul>
            {product.map((IProduct) => (
                <div>
                <li>{IProduct.name}</li>
                <li>{IProduct.picture}</li>
                <li>{IProduct.price}</li>
                </div>
                
            
                ))}
                </ul>
        </Main>
        
    )
}
