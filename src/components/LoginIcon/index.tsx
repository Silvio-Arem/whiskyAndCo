import { Link } from "react-router-dom";
import { LinkList } from "../Nav/styles";

export default function LoginIcon() {
    return (
        <LinkList>
          <li><Link to="/login">Login</Link></li>
        </LinkList>
    );
  }