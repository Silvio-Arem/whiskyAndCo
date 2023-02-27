import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor, secondaryColor, tertiaryColor } from '../UI/variables';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${secondaryColor};
  padding: 30px;
  margin: 15px auto auto auto;
  bottom: 0px;

  .contact {
    display: flex;
    justify-content: space-evenly;
  }

  h4 {
    color: ${primaryColor};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ul {
    color: ${tertiaryColor};
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: ${tertiaryColor};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${primaryColor};
    }
  }

  ul li a:hover svg {
    color: ${primaryColor};
  }

  .bottom-bar {
    border-top: 1px solid color: ${tertiaryColor};;
    margin-top: 30px;
    padding-top: 20px;

    p {
      color: ${primaryColor};
      text-align: center;  
      font-size: 14px;
      margin-bottom: 10px;
    }

    
  }
`;

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <div className="container ">
        <div className="row contact">
          <div className="col">
            <h4>Informações de Contato</h4>
            <ul>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Endereço: Rua Gama, 123 - Experience - Edição/46 - CEP 12345-678</li>
              <li><FontAwesomeIcon icon={faPhone} /> Telefone: (11) 1234-5678</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Email: contato@whiskyandco.com.br</li>
            </ul>
          </div>
          <div className="col">
            <h4>Links Rápidos</h4>
            <ul>
              <li><Link to="/products">Whiskys</Link></li>
              <li><Link to="/profile">Perfil</Link></li>
              <li><Link to="#">Sobre</Link></li>
              <li><Link to="/admin">Painel do Administrador</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bottom-bar">
        <div className="row">
          <div className="col">
            <p>&copy; 2023 Whisky&Co. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
