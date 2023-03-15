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

  button, select, input {
    outline: transparent;
    border: .125rem solid ${primaryColor};
    &:hover, &:focus {
      border: .25rem solid ${primaryColor};
      box-shadow: rgba(0, 0, 0, 0.16) 0px .25rem 1rem, rgba(0, 0, 0, 0.23) 0px .25rem 1rem;
    }
  }

  button, select, input[type="submit"] {
    text-transform: uppercase;
    margin: .15rem;
    padding: .25rem;
    background-color: ${secondaryColor};
    color: ${tertiaryColor};
    &:hover, &:focus {
      color: ${primaryColor};
    }
  }

  select, input {
    height: 2.5rem;
  }
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  div, ul {
    width: 100%;
    max-width: 48rem;
    padding: 2rem;
  }

  select {
    width: 33%;
  }

  button {
    min-width: 6rem;
  }

  input {
    text-transform: none;
    width: 66%;
    padding: .5rem;
    border: 2px solid ${secondaryColor};
    &:focus {
      border: 3px solid ${primaryColor};
      box-shadow: rgba(0, 0, 0, 0.16) 0px .25rem 1rem, rgba(0, 0, 0, 0.23) 0px .25rem 1rem;
    }
  }
  a{
    text-decoration: none;
    color: ${secondaryColor};
    &:hover, &:focus {
      color: ${primaryColor};
      font-size: large;
    }
  }

  li {
    list-style-type: none;
    &:hover {
      background-color: ${secondaryColor};
    }
  }

  label, p:nth-child(even) {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;