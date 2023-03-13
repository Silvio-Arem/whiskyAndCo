import React, { useState } from "react";
import {DivForm, ContainerForm, DivButton } from "./styles"
import {  CompleteFormState, FormDataProps} from "../Multi Steps/MultiSteps";
import { useForm } from "react-hook-form";



interface Iaddress {
    address: string
}
    
 export function FormAddress ({formData, setFormData, SetarPage, FormTitles, page, setPage, BackPage}: FormDataProps)  {
    const {handleSubmit, register} = useForm<CompleteFormState>();

    const [address, setAddress] = useState<any> ()
    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     console.log("submit", {address:formData})};

    function onSubmitFunction (data:any){
        console.log(data)
        setAddress(data)
    }
    
    
    return (
        <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
                    
                    <DivForm>
                    <label htmlFor="address"></label>
                    <input type="text" placeholder="Endereço" {...register("address")} required value={formData.address} onChange= {(event) => setFormData({...formData, address: event.target.value})}/>
                    </DivForm>
    
                    <DivButton>
                    <button id="disable" disabled={page == 0 } onClick={() => BackPage()}>Voltar</button>
                    <button type="submit" onClick={() => SetarPage()}> Próximo</button>  
                    </DivButton>
      
        </ContainerForm>
    )
}
export default FormAddress;