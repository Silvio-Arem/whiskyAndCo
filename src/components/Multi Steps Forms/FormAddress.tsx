import React from "react";
import {DivForm, DivInputAddress, ContainerForm } from "./styles"
const FormAddress = () => {
    return (
        <ContainerForm>
        <DivForm >
                <DivInputAddress>
                    <label></label>
                    <input type="text" placeholder="Cep" />
                    <label></label>
                    <input type="text" placeholder="Rua" />
                    <label></label>
                    <input type="text" placeholder="Numero" />
                    <label></label>
                    <input type="text" placeholder="Estado" />
                </DivInputAddress>
        </DivForm>
        </ContainerForm>
    )
}
export default FormAddress;