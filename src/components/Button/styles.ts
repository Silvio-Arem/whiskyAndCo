import styled from "styled-components";
import { primaryColor, secondaryColor, tertiaryColor } from "../UI/variables";

export const PrimaryButton = styled.div`
    margin: 10px 0;

    button {
        border: none;
    }

    a {
        display: block;
        padding: 4px 56px;
        background-color: ${secondaryColor};
        border: 4px solid ${primaryColor};
        border-radius: 5px;
        text-align: center;
        color: ${primaryColor};
        text-decoration: none;
        font-size: 1rem;

        &:hover {
        background-color: ${tertiaryColor};
        }
    }
`;