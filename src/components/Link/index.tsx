interface LinkProps {
    texto: string;
    redirect: string;
}

export default function Link(props: LinkProps) {
    return (
        <a href={props.redirect}>
            {props.texto}
        </a>
    )
}