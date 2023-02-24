import { Link } from "react-router-dom";

interface LogoProps {
    origin: string;
    alternative: string;
    redirect: string;
}

export default function Logo(props: LogoProps) {
    return (
        <Link to={props.redirect}>
            <img src={props.origin} alt={props.alternative}/>
        </Link>
    )
}