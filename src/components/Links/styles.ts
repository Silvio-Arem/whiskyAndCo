import styled from "styled-components";
import { primaryColor } from "../UI/variables";


export const LinkDefault = styled.a`
    padding: 5px;
    text-decoration: none;
    
    :hover {
        border-bottom: 3px solid ${primaryColor};
        transition: transform 5s;
    };
`;

export const LinkList = styled.li`
    display: flex;
    flex-direction: row;
`