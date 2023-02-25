import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { LinkItem } from '../Nav/styles';
import { Link } from 'react-router-dom';
import { ContainerFooter, LinkListFooter } from './styles';


function Footer() {
    return (
        <ContainerFooter>
            <div>
                <h4>Informações de Contato</h4>
                <LinkListFooter>
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Endereço: Rua Gama XP, 123 - Bairro - Cidade/Estado - CEP 12345-678</li>
                    <li><FontAwesomeIcon icon={faPhone} /> Telefone: (11) 1234-5678</li>
                    <li><FontAwesomeIcon icon={faEnvelope} /> Email: contato@email.com.br</li>
                </LinkListFooter>
            </div>
            <div>
                <LinkListFooter>
                    <LinkItem><Link to="/products">Whiskys</Link></LinkItem>
                    <LinkItem><Link to="/profile">Perfil</Link></LinkItem>
                    <LinkItem><Link to="#">Sobre</Link></LinkItem>
                    <LinkItem><Link to="/admin">Painel do Administrador</Link></LinkItem>
                </LinkListFooter>
            </div>
            <div >
                <p>Todos os direitos reservados &copy; 2023 Whisky&Co</p>
            </div>
        </ContainerFooter>
    );
}

export default Footer;