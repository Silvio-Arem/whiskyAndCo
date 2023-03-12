import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Body = styled.div`
background-color: #E5E5E5;
width: 100%;
height: 100vh;
margin: 0px;
padding: 0px;
`


export const LoginDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height:70vh;
padding:2rem; 

`

export const Form = styled.form`
background-color: #FFFFFF;
width: 100%;
max-width: 400px;
padding:2rem; 

h1 {
color: #111111;
font-size: 28px ;
}
h3 {
color: #A9ABBD;
font-size: 18px
}
`

export const Div = styled.div`
padding: 5px 0 5px 0;

label {
    display: block;
    padding-top:0;
}
input{
    width: 95%;
    padding: 10px;
}

`

export const ActionsDiv = styled.div`
text-align: start;
margin-top: 1rem;
display: flex;
justify-content: space-between;


button {
border-radius: 2px;
color: #EE8700;
background-color: black;
padding: 2px 8px 2px 8px;
cursor: pointer;
width: 80px;
font-size: 17px;
}
p {
color: #A9ABBD;
margin: 0;
}

a{
text-decoration: none;
color: #A9ABBD;
}

`

export const CadastreDiv = styled.div`


p{
    display: flex;
    gap: 5px;

color: #A9ABBD;
}


`
export const LinkReact = styled(Link)`

text-decoration: none;
color: #646468;
`
