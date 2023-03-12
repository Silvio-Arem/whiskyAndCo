import React from "react";
import { FormDataProps } from "../Multi Steps/MultiSteps";
import { ShippingBox } from "../Shipping-Checkbox/shipping";
import {DivForm, ContainerForm, DivShipping} from "./styles"

function FormShipping ({formData, setFormData, FormTitles, SetarPage,  page}: FormDataProps)  {
    return (
        <ContainerForm>
            <DivForm>

        <DivShipping>
        <ShippingBox title="Comum - GRATIS" time="5 a 10 dias uteis" onChange= {(event) => setFormData({...formData, payment: event.target.value})}  checked={formData.shipping}/>
        </DivShipping>
        
        <DivShipping>
        <ShippingBox title="Expresso - R$8,00" time="2 a 3 dias uteis" onChange= {(event) => setFormData({...formData, payment: event.target.value})}  checked={formData.shipping}/>
        </DivShipping>
        <button type="submit" onClick={() => SetarPage()}> Próximo</button>
        </DivForm>

        </ContainerForm>
    )
}
export default FormShipping;