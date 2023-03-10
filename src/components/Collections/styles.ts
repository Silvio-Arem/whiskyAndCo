import styled from "styled-components";
import { primaryColor } from "../UI/variables";

export const CollectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 0;
`;

export const CollectionsTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${primaryColor};
`;

export  const CollectionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    text-decoration: none;
    color: #333;

  
  }
`;

export  const CollectionImage = styled.img`
  border-radius: 30%;
  width: 100%;
  max-width: 180px;
  height: 62%;
  margin-bottom: 0.5rem;

  &:hover {
    border: 4px solid ${primaryColor};
  }
`;
