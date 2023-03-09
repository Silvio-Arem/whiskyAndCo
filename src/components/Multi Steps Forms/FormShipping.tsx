import React from "react";
import { FormDataProps } from "../Multi Steps/MultiSteps";
import { ShippingBox } from "../Shipping-Checkbox/shipping";
import {DivForm, ContainerForm, DivShipping} from "./styles"

function FormShipping ({formData, setFormData}: FormDataProps)  {
    return (
        <ContainerForm>
            <DivForm>

        <DivShipping>
        <ShippingBox title="Comum - GRATIS" time="5 a 10 dias uteis" onChange= {(event) => setFormData({...formData, shipping: formData.shipping})} key="shipping" checked={formData.shipping}/>
        </DivShipping>
        
        <DivShipping>
        <ShippingBox title="Expresso - R$8,00" time="2 a 3 dias uteis" onChange= {(event) => setFormData({...formData, shipping: formData.shipping})} key="shipping" checked={formData.shipping}/>
        </DivShipping>

        </DivForm>

        </ContainerForm>
    )
}
export default FormShipping;