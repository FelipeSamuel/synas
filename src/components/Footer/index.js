import React from 'react';

//ASSETS
import insta from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

//STYLE
import {
  FooterContainer,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  Social,
  Network,
  Terms,
  RightsText,
  ResponsiveContent,
  TextResponsive,
  TermsResponsive,
} from './styles';
import { Link } from 'react-router-dom';

export default function Rodape(props) {
  return (
    <FooterContainer>
      <LeftColumn>
        Rafael Greyck tem 20 anos de carreira na astrologia e é responsável por
        toda confiabilidade e desenvolvimento das compatibilidades do Synas.
      </LeftColumn>
      <MiddleColumn>
        <Social>
          <Network
            href="https://www.instagram.com/synas_astrologia/?hl=pt-br"
            target="_blank"
          >
            <img src={insta} alt="Instagram" />
          </Network>
          <Network href="https://web.facebook.com/synasapp/" target="_blank">
            <img src={facebook} alt="Facebook" />
          </Network>
        </Social>
        <Link to="privacy">
          <Terms>Termos de uso</Terms>
        </Link>
        <RightsText>Todos os direitos reservados ao Synas | 2022</RightsText>
      </MiddleColumn>
      <RightColumn>
        Av. Barão de Tefé - 152, Rio de Janeiro, <br />
        RJ - Brasil - 24746 190 <br />
        E-mail: contato@synas.com.br <br />
        Telefone: +55 21 964292460
      </RightColumn>
      <ResponsiveContent>
        <Social>
          <Network
            href="https://www.instagram.com/synas_astrologia/?hl=pt-br"
            target="_blank"
          >
            <img src={insta} alt="Instagram" />
          </Network>
          <Network href="https://web.facebook.com/synasapp/" target="_blank">
            <img src={facebook} alt="Facebook" />
          </Network>
        </Social>
        <TextResponsive>
          E-mail: contato@synas.com.br <br />
          Telefone: +55 21 964292460
        </TextResponsive>
        <Link to="privacy">
          <TermsResponsive>Termos de uso</TermsResponsive>
        </Link>
        <TextResponsive>
          Todos os direitos reservados ao Synas | 2021
        </TextResponsive>
      </ResponsiveContent>
    </FooterContainer>
  );
}
