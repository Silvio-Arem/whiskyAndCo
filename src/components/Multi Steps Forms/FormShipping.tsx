import React from "react";
import { ShippingBox } from "../Shipping-Checkbox/shipping";
import {DivForm, ContainerForm, DivShipping} from "./styles"

const FormShipping= () => {
    return (
        <ContainerForm>
            <DivForm>

        <DivShipping>
        <ShippingBox title="asdasasadads" time="aaaaaaa"/>
        </DivShipping>
        
        <DivShipping>
        <ShippingBox title="asdasasadads" time="aaaaaaa"/>
        </DivShipping>

        </DivForm>

        </ContainerForm>
    )
}
export default FormShipping;