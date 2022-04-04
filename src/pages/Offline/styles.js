import styled from 'styled-components';
import { palette } from '../../theme';

export const Container = styled.div`
  height: 100vh;
  min-height : 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ImageLogo = styled.img`
  display: block;
  z-index: 2;
  position: relative;
  height: 200px;
  width: auto;
`;
export const Text = styled.h2`
  font-size: 1.8em;
  color: ${palette.white};
  margin: 30px;
`;