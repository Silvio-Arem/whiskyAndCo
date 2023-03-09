import { Link } from "react-router-dom";
import { PrimaryButton } from "./styles";

interface ButtonProps {
    title: string;
    text: string;
    link: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {


    return (
        <PrimaryButton className="primary-button">
            <button>
                <Link to={props.link} title={props.title}>{props.text}</Link>     
            </button>
        </PrimaryButton>
    );
};