import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./styles";

interface ButtonProps {
    title: string;
    text: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {

    const navigate = useNavigate();

    function handleClick() {
        if (props.onClick) {
            props.onClick();
        } else {
            navigate(-1);
        }
    }

    return (
        <PrimaryButton className="primary-button">
            <button onClick={handleClick} title={props.title}>{props.text}</button>
        </PrimaryButton>
    );
};