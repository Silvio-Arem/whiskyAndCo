import styled from 'styled-components';
import { primaryColor, secondaryColor, tertiaryColor } from '../../components/UI/variables';

export const StyledOrder = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  
  table {
  border: 2px solid ${primaryColor};
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  max-width: 64rem;
  }

  table tr {
    padding: 2rem;
  }

  table th,
  table td {
  padding: .625em;
  text-align: center;
  }

  table th {
  letter-spacing: .1em;
  }

  img {
  width: 100%;
  max-width: 200px;
  margin-bottom: 10px;
  padding: .5rem;
}
  
  div {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  button {
    min-width: 6rem;
    text-transform: uppercase;
    color: ${tertiaryColor};
    margin: .15rem;
    padding: .25rem;
    background-color: ${secondaryColor};
    outline: transparent;
    border: .125rem solid ${primaryColor};
    &:hover, &:focus {
      color: ${primaryColor};
      border: .25rem solid ${primaryColor};
      box-shadow: rgba(0, 0, 0, 0.16) 0px .25rem 1rem, rgba(0, 0, 0, 0.23) 0px .25rem 1rem;
    }
  }
  
  p{
    font-size: 1.25rem;
  }
  
 tr {
  border: 1px solid ${primaryColor};
 } 

  @media (max-width: 600px) {
    
    table thead {
      display: none;
      overflow: hidden;
    }

    tr {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    }
  }
`;

// @media screen and (max-width: 600px) {

  
  // table thead {
  //   border: none;
  //   clip: rect(0 0 0 0);
  //   height: 1px;
  //   margin: -1px;
  //   overflow: hidden;
  //   padding: 0;
  //   position: absolute;
  //   width: 1px;
  // }
  
//   table tr {
//     border-bottom: 3px solid #ddd;
//     display: block;
//     margin-bottom: .625em;
//   }
  
//   table td {
//     border-bottom: 1px solid #ddd;
//     display: block;
//     font-size: .8em;
//     text-align: right;
//   }
  
  // table td::before {
  //   content: attr(data-label);
  //   float: left;
  //   font-weight: bold;
  //   text-transform: uppercase;
  // }
  
  // table td:last-child {
  //   border-bottom: 0;
  // }
// }