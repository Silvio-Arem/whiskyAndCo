import React, {useState} from "react"
import FormAddress from "../Multi Steps Forms/FormAddress"
import FormPayment from "../Multi Steps Forms/FormPayment"
import FormShipping from "../Multi Steps Forms/FormShipping"
<<<<<<< HEAD
import {Body} from "../LoginPage/styles"


import {Container, ProgressBar, Title, ContainerForm, DivButton} from "../Multi Steps Forms/styles"
=======
import {Container, ProgressBar, Title, ContainerForm, DivButton, Body, DivPage} from "../Multi Steps Forms/styles"
>>>>>>> f1b8919a5c4071ef51089aa2c8a12224cce00b54

function MultiSteps () {

    const [page, setPage] = useState(0);
    const FormTitles =["Endereço", "Método de Entrega", "Forma de pagamento"];

    const PageDisplay = () => {
        if (page === 0) {
            return <FormAddress/>;
        }
        else if (page === 1) {
            return <FormShipping/>;
        }
        else {
            return <FormPayment/>;
        }
    }

    function Button () {
        return page === 2 ? (
    
            <button id="disable" disabled={page == FormTitles.length - 1 } onClick={() => {setPage((currPage) => currPage + 1);}}> Proximo</button>
    
        ):   <button disabled={page == FormTitles.length - 1 } onClick={() => {setPage((currPage) => currPage + 1);}}> Proximo</button>
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
        <button disabled={page == 0 } onClick={() => {setPage((currPage) => currPage - 1);}}>Voltar</button>

        {/* <button disabled={page == FormTitles.length - 1 } onClick={() => {setPage((currPage) => currPage + 1);}}> Proximo</button> */}
        <Button/> 
        </DivButton> 
    </DivPage>

     

    


</Container>


</Body>
)


}
export default MultiSteps;