import styled from "styled-components";
import { primaryColor, tertiaryColor } from "../UI/variables";

export const NavContainer = styled.nav`
ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }

    a {
      color: ${primaryColor};
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.2s;

      &:hover {
        color: ${tertiaryColor};
      }
    }
  }
}
`;