import { primaryColor, secondaryColor, tertiaryColor } from './../UI/variables';
import styled from "styled-components";

export const CounterDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    margin: 10px 0 10px 1px;

    button {
        background-color: ${secondaryColor};
        color: ${primaryColor};
        border: 3px solid ${primaryColor};
        padding: 1px 25px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: ${tertiaryColor};
        }
    }

    span {
        font-weight: bold;
    }

    @media (max-width: 768px) {
        margin: 10px 0 10px 95px;
    }
`;