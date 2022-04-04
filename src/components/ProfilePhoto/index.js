import React from 'react';
import Masculino from '../../assets/male.png';
import Feminino from '../../assets/female.png';

//STYLES
import { Container } from './styles.js';

export default function ProfilePhoto(props) {
  const gender = (genero) => {
    if (genero === 'Masculino' || genero === 0 || genero === 'M')
      return Masculino;
    else if (genero === 'Feminino' || genero === 1 || genero === 'F')
      return Feminino;
  };

  return (
    <Container small={props.small} xsmall={props.xsmall} large={props.large}>
      <img
        src={
          // eslint-disable-next-line eqeqeq
          props.src != null && props.src != ''
            ? props.src
            : gender(props.genero)
        }
        alt="user"
      />
      {props.children}
    </Container>
  );
}
