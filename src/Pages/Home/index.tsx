import { Link } from "react-router-dom";
import BannerComponent from "../../components/Banner";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../components/UI/variables";

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
      border: 3px solid ${primaryColor};
      color: ${primaryColor};
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.2s;
      border-radius: 3px;    

      &:hover {
        border: 4px solid ${primaryColor};
        background-color: ${secondaryColor};
      }  
    }

    }
    
`;



export default function Home() {
  return (
    <main className="Home">
      <Presentation className="container ">
        <div className="row">
          <div className="col">
            <h1>Você vai adorar a nossa variedade</h1>
            <p>Nossa loja online de whisky oferece marcas exclusivas. Compra fácil e intuitiva com ampla variedade de opções, entregas rápidas e atendimento personalizado. Comprometidos com a melhor qualidade, cada garrafa é cuidadosamente embalada e entregue em sua porta. Descubra nossa seleção excepcional para satisfazer o seu paladar!</p>
          </div>
          <div className="button-presentation">
          <Link to="/products" title="Ir para whiskys">Confira!</Link>
          </div>
        </div>
      </Presentation>
      <div>
      <BannerComponent />
      </div>
    </main>
  );
}