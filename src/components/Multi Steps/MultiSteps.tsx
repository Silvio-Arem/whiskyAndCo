import React, {useState} from "react"
import FormAddress from "../Multi Steps Forms/FormAddress"
import FormPayment from "../Multi Steps Forms/FormPayment"
import FormShipping from "../Multi Steps Forms/FormShipping"
import {Container, ProgressBar, Title, DivButton, Body, DivPage, ContainerForm} from "../Multi Steps Forms/styles"





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
        payment: string,
        
}

export interface FormDataProps extends FormProps{
    FormTitles: string[]
    page: number
    SetarPage: () => void
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
            return <FormAddress FormTitles={FormTitles}  page={page} SetarPage={SetarPage} formData={formData} setFormData={setFormData}/>;
        }
        else if (page === 1) {
            return <FormShipping FormTitles={FormTitles} page={page} SetarPage={SetarPage} formData={formData} setFormData={setFormData}/>;
        }
        else {
            return <FormPayment FormTitles={FormTitles}  page={page} SetarPage={SetarPage} formData={formData} setFormData={setFormData}/>;
        }    
    }

    function SetarPage () {
        setPage(page + 1)
    }

    function ButtonBack () {
        return page === 0 ? (
    
            <button id="disableBack" disabled={page == 0 } onClick={() => {setPage((currPage) => currPage - 1);}}>Voltar</button>
    
        ):   <button disabled={page == 0 } onClick={() => {setPage((currPage) => currPage - 1);}}>Voltar</button>
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
         


        </DivButton> 
    </DivPage>

     

    


</Container>


</Body>
)


}
export default MultiSteps; 
