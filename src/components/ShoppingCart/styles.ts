import styled from "styled-components";
import { primaryColor } from "../UI/variables";

export const ShoppingCartContainer = styled.div`
.carrinho {
  p {
    align-items: center;
    display: flex;
    text-decoration: none;

    img {
      max-height: 26px;
      margin-right: 5px;
    }

    span {
      color: ${primaryColor};  
      font-size: 16px;
    }
  }
}
`;