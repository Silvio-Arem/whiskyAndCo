import React, {useState} from "react"
import FormAddress from "../Multi Steps Forms/FormAddress"
import FormPayment from "../Multi Steps Forms/FormPayment"
import FormShipping from "../Multi Steps Forms/FormShipping"
import {Container, ProgressBar, Title, DivButton, Body, DivPage} from "../Multi Steps Forms/styles"

export interface address{
    address:{
        address: string,

    }
}

export interface FormProps{
    formData:{
        address: string,
        shipping: boolean,
        payment: string
    }
}

export interface CompleteFormState{
         address: string,
        shipping: boolean,
        payment: string
}

export interface FormDataProps extends FormProps{
    setFormData: React.Dispatch<React.SetStateAction<CompleteFormState>>
}


function MultiSteps () {

    const [page, setPage] = useState(0);
    const FormTitles =["Endereço", "Método de Entrega", "Forma de pagamento"];



    const [formData, setFormData] = useState({
        address: "",
        shipping: false,
        payment: ""
    })


    const PageDisplay = () => {
        if (page === 0) {
            return <FormAddress formData={formData} setFormData={setFormData}/>;
        }
        else if (page === 1) {
            return <FormShipping formData={formData} setFormData={setFormData}/>;
        }
        else {
            return <FormPayment formData={formData} setFormData={setFormData}/>;
        }
    }
    function ButtonBack () {
        return page === 0 ? (
    
            <button id="disableBack" disabled={page == 0 } onClick={() => {setPage((currPage) => currPage - 1);}}>Voltar</button>
    
        ):   <button disabled={page == 0 } onClick={() => {setPage((currPage) => currPage - 1);}}>Voltar</button>
        }
    function ButtonProx () {
        return page === 2 ? (
    
            <button id="disable" disabled={page == FormTitles.length - 1 } onClick={() => {setPage((currPage) => currPage + 1);}}> Enviar</button>
    
        ):   <button disabled={page == FormTitles.length - 1 } onClick={() => {setPage((currPage) => currPage + 1);}}> Próximo</button>
    } 


return (
<Body>

<Container>
    
    <Title className="header">
        <h2> {FormTitles[page]} </h2>
    </Title>




    
    <DivPage> 
    <ProgressBar>
        <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
    </ProgressBar> 

        {PageDisplay()}

        <DivButton>

        <ButtonBack/>
        <ButtonProx/> 
        
        </DivButton> 
    </DivPage>

     

    


</Container>


</Body>
)


}
export default MultiSteps; 
