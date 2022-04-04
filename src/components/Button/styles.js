import styled from 'styled-components/';
import { darken, transparentize } from 'polished';
import { palette } from '../../theme';

export const ButtonDefault = styled.button`
  /* appearance: none; */
  background-color: ${props => props.backgroundColor || palette.blue};
  border: 0px;
  border-radius: 20px;
  /* padding: ${props => (props.loading ? 0 : '10px 15px')}; */
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '2.3em'};
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.fontColor || '#fff'};
  box-shadow: ${props => props.shadow || 0};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:hover {
    @media screen and (min-width: 700px) {
      cursor: pointer;
      background: ${props =>
        props.backgroundColor
          ? darken(0.05, props.backgroundColor)
          : darken(0.05, palette.blue)};
    }
  }
`;
export const ButtonTransparent = styled.button`
  /* appearance: none; */
  background: ${props =>
    props.backgroundColor
      ? transparentize(props.transparency, props.backgroundColor)
      : transparentize(props.transparency, palette.blue)};
  border: 0px;
  border-radius: 20px;
  /* padding: ${props => (props.loading ? 0 : '10px 15px')}; */
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '2.3em'};
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.fontColor || '#fff'};
  box-shadow: ${props => props.shadow || 0};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:hover {
    @media screen and (min-width: 700px) {
      cursor: pointer;
      background: ${props =>
        props.hoverColor
          ? transparentize(0.5, props.hoverColor)
          : darken(0.05, transparentize(props.transparency, palette.blue))};
    }
  }
`;
export const ButtonBordered = styled.button`
  /* appearance: none; */
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  border: ${props =>
    props.borderColor
      ? `3px solid ${props.borderColor}`
      : `3px solid ${palette.white}`};
  border-radius: 20px;
  /* padding: ${props => (props.loading ? 0 : '10px 15px')}; */
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '2.3em'};
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.fontColor || '#fff'};
  box-shadow: ${props => props.shadow || 0};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:hover {
    @media screen and (min-width: 700px) {
      cursor: pointer;
      background: ${props =>
        props.hoverColor
          ? transparentize(0.5, props.hoverColor)
          : transparentize(0.5, palette.white)};
    }
  }
`;
export const ButtonFacebook = styled.button`
  /* appearance: none; */
  background: linear-gradient(to left, #1b1464, #2b5189);
  border: 0px;
  border-radius: 20px;
  /* padding: ${props => (props.loading ? 0 : '10px 15px')}; */
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '2.3em'};
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.fontColor || '#fff'};
  box-shadow: ${props => props.shadow || 0};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:hover {
    @media screen and (min-width: 700px) {
      cursor: pointer;
      background: linear-gradient(to left, #15104f, #254676);
    }
  }
`;

export const ButtonSynas = styled.button`
  /* appearance: none; */
  background: linear-gradient(to right, #4a5197, #ff0a6c);
  border: 0px;
  border-radius: 20px;
  /* padding: ${props => (props.loading ? 0 : '10px 15px')}; */
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '2.3em'};
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.fontColor || '#fff'};
  box-shadow: ${props => props.shadow || 0};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:hover {
    @media screen and (min-width: 700px) {
      cursor: pointer;
      background: linear-gradient(to right, #424886, #ef0060);
    }
  }
`;
export const Loading = styled.img`
  height: ${props => props.height || '2.3em'};
`;
