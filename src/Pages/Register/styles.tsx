import styled from 'styled-components';

export const FormRegister = styled.form`
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
min-height:70vh;
padding:1rem; 

button{
text-shadow: none;
font-size: 13px;
padding: 2px 8px 2px 8px;
background-color: black;
color: #cebd24;
border-radius: 2px;
margin-top: 10px;
}
h1 {
color: #111111;
font-size: 28px ;
margin-bottom: 15;
}
`

export const InputDiv = styled.div`
padding: 5px 0 5px 0;

label {
    display: block;
    padding-top:0;
}
input{
    width: 100%;
    
    padding: 10px;
}
`


