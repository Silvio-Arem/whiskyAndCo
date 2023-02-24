import { Link } from "react-router-dom";
import { LogoDefault } from "./styles";

interface LogoProps {
    origin: string;
    alternative: string;
    redirect: string;
}

export default function Logo(props: LogoProps) {
    return (
        <div>
            <Link to={props.redirect}>
                <LogoDefault src={props.origin} alt={props.alternative} />
            </Link>
        </div>
    )
}