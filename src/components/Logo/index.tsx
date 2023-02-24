import { Link } from "react-router-dom";
import { LogoDefault } from "./styles";

interface LogoProps {
    src: string;
    alt: string;
  }
  
export default function Logo(props: LogoProps) {
    return (
      <div className="logo">
        <Link to="/">
          <LogoDefault src={props.src} alt={props.alt} />
        </Link>
      </div>
    );
  }