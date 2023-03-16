import styled from 'styled-components';
import { primaryColor, secondaryColor, tertiaryColor } from '../../components/UI/variables';

export const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  button, input {
    min-width: 6rem;
    outline: transparent;
    border: .125rem solid ${primaryColor};
    &:hover, &:focus {
      border: .25rem solid ${primaryColor};
      box-shadow: rgba(0, 0, 0, 0.16) 0px .25rem 1rem, rgba(0, 0, 0, 0.23) 0px .25rem 1rem;
    }
  }

  button, input[type="submit"] {
    text-transform: uppercase;
    margin: .15rem;
    padding: .25rem;
    background-color: ${secondaryColor};
    color: ${tertiaryColor};
    &:hover, &:focus {
      color: ${primaryColor};
    }
  }

  input {
    height: 2.5rem;
    margin-bottom: 1rem;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    text-transform: none;
    width: 100%;
    max-width: 24rem;
    padding: .5rem;
    border: 2px solid ${secondaryColor};
    &:focus {
      border: 3px solid ${primaryColor};
      box-shadow: rgba(0, 0, 0, 0.16) 0px .25rem 1rem, rgba(0, 0, 0, 0.23) 0px .25rem 1rem;
    }
  }

  label, p:nth-child(odd) {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;