import React, { useState } from "react";
import {DivForm, ContainerForm } from "./styles"
import {  FormDataProps } from "../Multi Steps/MultiSteps";


 function FormAddress ({formData, setFormData}: FormDataProps)  {


    
    return (
        <ContainerForm>
        <DivForm>
                
                    <label htmlFor="address"></label>
                    <input type="address" placeholder="Endereço" required value={formData.address} onChange= {(event) => setFormData({...formData, address: event.target.value})}/>
                    

                
        </DivForm>
        </ContainerForm>
    )
}
export default FormAddress;