import React from "react";
import { ShippingBox } from "../Shipping-Checkbox/shipping";
import {DivForm, ContainerForm, DivShipping} from "./styles"

const FormShipping= () => {
    return (
        <ContainerForm>
            <DivForm>

        <DivShipping>
        <ShippingBox title="Comum - GRATIS" time="5 a 10 dias uteis"/>
        </DivShipping>
        
        <DivShipping>
        <ShippingBox title="Expresso - R$8,00" time="2 a 3 dias uteis"/>
        </DivShipping>

        </DivForm>

        </ContainerForm>
    )
}
export default FormShipping;