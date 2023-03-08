import styled from 'styled-components';
import { primaryColor, secondaryColor, tertiaryColor } from '../../components/UI/variables';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  
  button, select {
    text-transform: uppercase;
    border: 2px solid ${primaryColor};
    margin: .15rem;
    padding: .25rem;
    background-color: ${secondaryColor};
    color: ${tertiaryColor};
    &:hover, &:focus {
      color: ${primaryColor};
      box-shadow: rgba(0, 0, 0, 0.16) 0px .25rem 1rem, rgba(0, 0, 0, 0.23) 0px .25rem 1rem;
    }
  }

  select, input {
    outline: transparent;
    height: 2.25rem;
  }
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
`;
