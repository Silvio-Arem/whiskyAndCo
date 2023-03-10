import { Link } from "react-router-dom";
import { PrimaryButton } from "./styles";

interface ButtonProps {
    title: string;
    text: string;
    link: string;
    state?: {
    _id: string,
    name: string,
    category: {
        _id: number,
        description: string 
    },
    brand: {
        _id: number,
        description: string 
    },
    picture: string,
    price: string,
    description: string
    },
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