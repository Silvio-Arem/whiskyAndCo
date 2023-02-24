
import { Link } from "react-router-dom";
import { LinkDefault, LinkList } from "./styles";
interface LinkProps {
    texto: string;
    redirect: string;
}

export default function Links(props: LinkProps) {
    return (
        <LinkList>
        <LinkDefault><Link to={props.redirect}>
            {props.texto}
        </Link></LinkDefault>
        </LinkList>
    )
}