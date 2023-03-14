import styled from 'styled-components';
// -------------------------------------- Pagina principal
export const Body = styled.div`
background-color: #E5E5E5;
width: 100%;
height: 100vh;
margin: 0px;
padding: 0px;
display: flex;
justify-content:center;
`

export const DivPage = styled.div`
width: auto;
height: auto;

`

export const Title = styled.div`
display:flex;
justify-content: center;
h2{
    font-size: 25px;
    margin-bottom: 8px;
    margin-top: 20px;
}
`

export const Container = styled.div`
display: flex;
flex-direction: column;
min-width: 300px;
min-height: 200px;

`
export const ProgressBar = styled.div `
 width: auto;
height: 15px;
border: 3px solid #000;
border-radius: 3px;

div{
width: 33.3%;
height: 100%;
background-color: #EE8700;
border: 1px solid #000;

}
`









// Formularios


export const DivShipping = styled.div`
margin-top: 5px;
margin-bottom: 10px;

input{
    border: 3px solid black;
}

`

export const ContainerForm = styled.form`
width: auto;
height: auto;
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;

`
export const DivForm = styled.div `
display: flex;
justify-content: center;
flex-direction: column;

height: 150px;
margin: 8px;

`
export const DivButton = styled.div`




button {
border-radius: 2px;
color: #EE8700;
background-color: black;
padding: 2px 8px 2px 8px;
cursor: pointer;
width: 80px;
font-size: 17px;
margin: 0 7px 0 7px;

}
#disable{

    opacity: 0.5;
}
`
