
import { Link } from "react-router-dom";
interface LinkProps {
    texto: string;
    redirect: string;
}

export default function Links(props: LinkProps) {
    return (
        <Link to={props.redirect}>
            {props.texto}
        </Link>
    )
}