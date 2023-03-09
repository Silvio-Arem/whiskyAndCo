import React from "react";
import { FormDataProps } from "../Multi Steps/MultiSteps";
import {DivForm, ContainerForm} from "./styles"

function FormPayment ({formData, setFormData}: FormDataProps)  {

    return (
        <ContainerForm>
        <DivForm>
            <label htmlFor="payment"></label>
             <input type="payment" placeholder="pagamento" value={formData.payment} onChange= {(event) => setFormData({...formData, payment: event.target.value})}/>
            </DivForm>
        </ContainerForm>
    )
}
export default FormPayment;