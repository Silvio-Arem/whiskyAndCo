import { secondaryColor } from './../UI/variables';
import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
top: 0px;
align-items: center; 
background-color: ${secondaryColor}; 
display: flex; 
height: 80px; 
justify-content: space-between; 
padding: 60px;
margin-bottom: 15px;

@media (max-width: 1023px) {
    /* height: auto; */
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;    
}

@media (max-width: 479px) {
    padding: 50px 49px 45px 28px;
    }
`;

export const DivLogoMenu = styled.div`
    display: flex;
    gap: 15px;
    
    @media (max-width: 479px) {
        flex-direction: row-reverse;
    }
`;

export const DivCartLogin = styled.div`
    display: flex;
    gap: 15px;
`;

