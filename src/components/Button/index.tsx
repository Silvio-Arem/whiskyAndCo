import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces";
import { PrimaryButton } from "./styles";

interface ButtonProps {
    title: string;
    text: string;
    link: string;
    state?: IProduct,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {


    return (
        <PrimaryButton className="primary-button">
            <button>
                <Link to={props.link} state={props.state} title={props.title}>{props.text}</Link>     
            </button>
        </PrimaryButton>
    );
};