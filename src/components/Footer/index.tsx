import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { StyledFooter } from './styles';


export default function Footer () {
  return (
    <StyledFooter >
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
              <li><Link to="/products" title="Ir para whiskys">Whiskys</Link></li>
              <li><Link to="/profile" title="Ir para perfil">Perfil</Link></li>
              <li><Link to="#" title="Ir para informações sobre a loja">Sobre</Link></li>
              <li><Link to="/admin" title="Ir para painel administrativo">Painel do Administrador</Link></li>
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
