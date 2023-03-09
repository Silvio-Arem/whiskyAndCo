import styled from 'styled-components';

export const FormRegister = styled.form`
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
min-height:70vh;
padding:1rem; 


button {
border-radius: 2px;
color: #EE8700;
background-color: black;
padding: 2px 8px 2px 8px;
cursor: pointer;
width: 80px;
font-size: 17px;
margin-top: 15px;
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


