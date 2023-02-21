interface LogoProps {
    origin: string;
    alternative: string;
    redirect: string;
}

export default function Logo(props: LogoProps) {
    return (
        <a href={props.redirect}>
            <img src={props.origin} alt={props.alternative}/>
        </a>
    )
}