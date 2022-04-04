import styled from 'styled-components';
import { palette } from '../../../theme';

export const ModalLoadingWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h4 {
    color: ${palette.purple};
    font-size: 18px;
  }
`;
export const ModalLoadingImage = styled.div`
  display: block;
  width: 80%;

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
    display: ${(props) => (props.smallDisplay ? 'none' : 'block')};
    margin-bottom: 20px;
  }
`;
export const ModalProgressbarContainer = styled.div`
  width: 100%;
  height: auto;
`;