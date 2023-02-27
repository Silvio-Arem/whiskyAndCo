import { Link } from "react-router-dom";
import { LogoContainer } from "./styles";

interface LogoProps {
  src: string;
  alt: string;
}

export default function Logo(props: LogoProps) {
  return (
    <LogoContainer>
      <div className="logo">
        <Link to="/">
          <img src={props.src} alt={props.alt} />
        </Link>
      </div>
    </LogoContainer>
  );
}