import { Link } from "react-router-dom";
import styled from "styled-components";
import { primaryColor, tertiaryColor } from "../UI/variables";

const LoginDiv = styled.div`
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

export default function LoginIcon() {
  return (
    <LoginDiv>
      <ul>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </LoginDiv>
  );
}