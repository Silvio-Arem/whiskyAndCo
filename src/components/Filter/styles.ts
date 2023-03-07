import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../UI/variables';

export const Filter = styled.article`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: ${secondaryColor};
  color: ${primaryColor};
 

  details {
  margin: 10px;
  padding: 10px;
  border: 4px solid ${primaryColor};
  border-radius: 5px;
  background-color: ${secondaryColor};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

summary {
  font-weight: bold;
  cursor: pointer;
}

label {
  display: block;
  margin: 10px 0;
}

input[type="checkbox"] {
  margin-right: 10px;
}

`;