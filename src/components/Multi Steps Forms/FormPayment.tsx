import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CompleteFormState, FormDataProps } from "../Multi Steps/MultiSteps";
import {DivForm, ContainerForm} from "./styles"

interface iPayment {
    payment: string
}
function FormPayment ({formData, setFormData, SetarPage, page, FormTitles}: FormDataProps)  {

    const {handleSubmit, register} = useForm<CompleteFormState>();
    
    const [payment, setPayment] = useState<iPayment> ()
    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     console.log("submit", {address:formData})};

    function onSubmitFunction (data:iPayment){
        console.log(data)
        setPayment(data)
    }
    

    return (
        <ContainerForm>
        <DivForm>
            <label htmlFor="payment"></label>
             <input type="payment" placeholder="pagamento" {...register("payment")}  onSubmit={handleSubmit(onSubmitFunction)} value={formData.payment} onChange= {(event) => setFormData({...formData, payment: event.target.value})}/>
             <button id="disable" type="submit"> Enviar</button>
            </DivForm>
        </ContainerForm>
    )
}
export default FormPayment;