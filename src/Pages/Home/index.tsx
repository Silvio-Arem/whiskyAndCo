import BannerComponent from "../../components/Banner";
import styled from "styled-components";
import { primaryColor, secondaryColor, tertiaryColor } from "../../components/UI/variables";
import CollectionSection from "../../components/Collections";
import Button from "../../components/Button";

const Presentation = styled.div`
    display: flex;
    text-align: center;
    

    h1 {
      color: ${primaryColor};
    }

    p {
      padding: 10px 13%;
    }

    .button-presentation {
      margin-bottom: 25px;
      

      a {
      padding: inherit;
      background-color: ${secondaryColor};
      border: 4px solid ${primaryColor};
      color: ${primaryColor};
      font-size: 16px;
      text-decoration: none;
      transition: color 0.2s;
      border-radius: 5px;    

      &:hover {
        background-color: ${tertiaryColor};
      }  
    }

    };

    @media (max-width: 768px) {
      font-size: 12px;
    }
    
`;

const DivBanner = styled.div`
  text-align: center;
`;



export default function Home() {
  return (
    <div className="Home">
      <Presentation className="container ">
        <div className="row">
          <div className="col">
            <h1>Você vai adorar a nossa variedade</h1>
            <p>Nossa loja online de whisky oferece marcas exclusivas. Compra fácil e intuitiva com ampla variedade de opções, entregas rápidas e atendimento personalizado. Comprometidos com a melhor qualidade, cada garrafa é cuidadosamente embalada e entregue em sua porta. Descubra nossa seleção excepcional para satisfazer o seu paladar!</p>
          </div>
          <Button link="/product" title="Ir para whiskys" text="Confira!"/>
        </div>
      </Presentation>
      <DivBanner>
      <BannerComponent />
      </DivBanner>
      <div>
      <CollectionSection />
      </div>
    </div>
  );
}