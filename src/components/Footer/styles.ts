import styled from "styled-components";
import { primaryColor, secondaryColor, tertiaryColor } from "../UI/variables";


export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${secondaryColor};
  padding: 30px;
  margin: 15px auto auto auto;
  bottom: 0px;

  .contact {
    display: flex;
    justify-content: space-evenly; 
    padding-left: 10%;
  }
 
  h4 {
    color: ${primaryColor};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ul {
    color: ${tertiaryColor};
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: ${tertiaryColor};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${primaryColor};
    }
  }

  ul li a:hover svg {
    color: ${primaryColor};
  }

  .bottom-bar {
    border-top: 1px solid color: ${tertiaryColor};;
    margin-top: 30px;
    padding-top: 20px;

    p {
      color: ${primaryColor};
      text-align: center;  
      font-size: 14px;
      margin-bottom: 10px;
    }

    
  }
`;