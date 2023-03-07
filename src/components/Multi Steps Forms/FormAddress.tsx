import React from "react";
import {DivForm, DivInputAddress, ContainerForm } from "./styles"
const FormAddress = () => {
    return (
        <ContainerForm>
        <DivForm >
                <DivInputAddress>
                    <input type="text" placeholder="Cep" />
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Numero" />
                    <input type="text" placeholder="Complemento" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Estado" />
                </DivInputAddress>
        </DivForm>
        </ContainerForm>
    )
}
export default FormAddress;