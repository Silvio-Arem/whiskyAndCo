import React, { useState } from "react";
import {DivForm, DivInputAddress, ContainerForm } from "./styles"
const FormAddress = () => {

    const [cep, setCep] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [state, setState] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submit", {cep, street, number, state});
    }
    return (
        <ContainerForm>
        <DivForm onSubmit={handleSubmit}>
                <DivInputAddress>
                    <label></label>
                    <input type="text" placeholder="Cep" value={cep} onChange= {(event) => setCep(event.target.value)}/>
                    <label></label>
                    <input type="text" placeholder="Rua" value={street} onChange= {(event) => setStreet(event.target.value)}/>
                    <label></label>
                    <input type="text" placeholder="Numero" value={number} onChange= {(event) => setNumber(event.target.value)}/>
                    <label></label>
                    <input type="text" placeholder="Estado" value={state} onChange= {(event) => setState(event.target.value)}/>
                </DivInputAddress>
        </DivForm>
        </ContainerForm>
    )
}
export default FormAddress;