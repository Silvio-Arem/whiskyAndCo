import styled from 'styled-components';
// -------------------------------------- Pagina principal
export const Body = styled.body`
background-color: #E5E5E5;
width: 100%;
height: 100vh;
margin: 0px;
padding: 0px;
display: flex;
justify-content:center;
`

export const DivPage = styled.div`
min-width: auto;
min-height: auto;

`

export const Title = styled.div`
display:flex;
justify-content: center;
h2{
    font-size: 25px;
    margin-bottom: 8px;
}
`

export const Container = styled.div`
display: flex;
flex-direction: column;

`
export const ProgressBar = styled.div `
 width: auto;
height: 10px;
border: 3px solid #000;
border-radius: 3px;

div{
width: 33.3%;
height: 100%;
background-color: #cebd24;
border: 1px solid #000;



}
`

export const DivButton = styled.div`
display: flex;
justify-content: space-evenly;

#disable {
    background-color: red;
}

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

export const DivShipping = styled.div`
margin-top: 5px;
margin-bottom: 10px

`

export const DivInputAddress = styled.div`
display: flex;
flex-direction: column;

input {
    width: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    margin-top: 10px;

    
}
`
export const ContainerForm = styled.div`
width: auto;
height: auto;
min-width: 300px;
min-height: 300px;
justify-content: center;
display: flex;
box-shadow: rgba(100, 100, 111, 0.2 ) 0px 7px 29px 0px;
border: 3px solid #000;
`
