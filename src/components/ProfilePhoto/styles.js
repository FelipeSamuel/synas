import styled from 'styled-components';

export const Container = styled.div`
  img {
    height: ${props =>
      props.xsmall
        ? '2em'
        : props.small
        ? '3.5em'
        : props.large
        ? '7em'
        : '5em'};
    width: auto;
  }
`;
