import styled from 'styled-components';
// -------------------------------------- Pagina principal
export const Title = styled.div`
display:flex;
justify-content: center;
h2{
    font-size: 25px;
    margin-bottom: 8px;
}
`

export const Container = styled.div`
max-width: 50vh;
max-height: 40vh;



`
export const ProgressBar = styled.div `
 width: 100%;
height: 10px;

div{
width: 33.3%;
height: 100%;
background-color: #cebd24;
border-radius: 50px;

}
`

export const DivButton = styled.div`
display: flex;
justify-content: space-evenly;
button {
border-radius: 2px;
color: #cebd24;
background-color: black;
padding: 2px 8px 2px 8px;
cursor: pointer;

}

`

// Formularios
export const DivForm = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
margin: 8px;
`
export const StyleFormAddress = styled.form`
`

export const DivInputAddress = styled.div`
margin: 8px;
display: flex;
justify-content: center;
flex-direction: column;

input {
    width: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;

    
}
`
export const ContainerForm = styled.div`
width: 50vh;
height: 40vh;
justify-content: center;
display: flex;
box-shadow: rgba(100, 100, 111, 0.2 ) 0px 7px 29px 0px;
`

