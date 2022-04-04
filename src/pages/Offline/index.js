import React from 'react';

//ASSETS
import logo from '../../assets/logo-white.png';
import background from '../../assets/background-offline.png';

//STYLE
import {  Container, ImageLogo, Text } from './styles';

export default function Offline() {

  return (
    <Container style={{backgroundImage: `url(${background})`}}>
      <ImageLogo src={logo} alt="logo" />
      <Text>Estamos temporariamente fora do ar e voltaremos em breve :)</Text>
    </Container>
  );
}
