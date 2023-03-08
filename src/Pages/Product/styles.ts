import styled from "styled-components";
import { primaryColor, secondaryColor, tertiaryColor } from "../../components/UI/variables";

export const ProductSection = styled.section`
    margin: 14px 7%;

.products__cards {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
border-radius: 5px;
margin: auto;
padding: 10px 28px 0 0px;
gap: 30px;
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

  .product__description {
  font-size: 14px;
  }
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
text-decoration: none;
font-size: 1rem;

&:hover {
background-color: ${tertiaryColor};
}
}

@media (min-width: 768px) {

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

.buttons__choice {
  display: flex;
  gap: 5px;
}

`;