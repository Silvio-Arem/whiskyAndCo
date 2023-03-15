import styled from 'styled-components';
import { primaryColor, secondaryColor, tertiaryColor } from '../../components/UI/variables';


export const ProductsContainer = styled.section`
  margin: 14px 22%;


  .products__cards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 2px solid ${primaryColor};
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}

.products__cards img {
  border: 4px solid ${primaryColor};
  width: 100%;
  max-width: 300px;
}

.products__cards-body {
  width: 100%;
  max-width: 350px;
  text-align: center;
  padding: 10px;
}

.products__cards-body h5 {
  font-size: 21px;
  margin: 10px 0;
}

.products__cards-body p {
  font-size: 16px;
  margin: 5px 0;
}

.products__card-button {
  margin: 10px 0;
}


.products__card-button a {
  display: block;
  padding: 10px;
  background-color: ${secondaryColor};
  border: 4px solid ${primaryColor};
  border-radius: 5px;
  text-align: center;
  color: ${primaryColor};
  transition: color 0.2s;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
  background-color: ${tertiaryColor};
}
}

@media (min-width: 990px) {
  .products__cards {
    flex-direction: row;
    max-width: 700px;
  }

  .products__cards img {
    max-width: 300px;
  }

  .products__cards-body {
    padding: 10px 20px;
    text-align: left;
  }

  .products__cards-body h5 {
    font-size: 1.5rem;
  }

  .products__cards-body p {
    font-size: 1.2rem;
  }

  .products__card-button {
    margin: 0;
    text-align: center;
  }
}

`;

export const PageDescript = styled.section`
    text-align: center;
    margin: 3% 11%;

    h2 {
      color: ${primaryColor};
    }

    @media (max-width: 768px) {
      p {
        font-size: 12px;
      }
    }
`;