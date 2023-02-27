import { Link } from "react-router-dom";
import { NavContainer } from "../Nav/styles";

export default function LoginIcon() {
  return (
    <NavContainer>
      <ul>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </NavContainer>
  );
}