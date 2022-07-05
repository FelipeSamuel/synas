import styled, { createGlobalStyle } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { animated } from 'react-spring';
import { Button } from '../components';
import { lighten, transparentize } from 'polished';
import { palette } from '../theme';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
`;
export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
        font-family: 'Nunito', sans-serif;
        height: 100%;
    }
`;
export const TopSlideContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
  width: 80vw;
  max-width: 1060px;

  @media screen and (max-width: 1024px) {
    /* display: none; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const WrapperResponsive = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 20px; */
    padding: 30px 0;
    margin-top: 100px;
  }
`;
export const AnimatedTopDiv = styled(animated.div)`
  position: absolute;
  /* z-index: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform, opacity;
  /* max-width: 100vw; */
  width: 80vw;
  /* height: 100%; */
`;
export const AnimatedBodyDiv = styled(animated.div)`
  /* position: absolute; */
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  will-change: transform, opacity;
  /* max-width: 100vw; */
  width: 100%;
`;
export const FormSlideLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Image = styled.div`
  display: block;
  width: 40%;

  img {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 55%;
    display: ${(props) => (props.smallDisplay ? 'none' : 'block')};
    margin-bottom: 20px;
  }
`;
export const CallToActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
export const CallToActionText = styled.h2`
  color: white;
  font-size: 1.7em;
  text-align: left;
  font-weight: normal;
  margin-bottom: 15px;
  span {
    font-weight: bold;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const CallToActionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 5px;
`;

export const DownloadLinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  width: 100%;
`;

export const AppleBadge = styled.a`
  cursor: pointer;
  width: 42%;
  img {
    width: 100%;
  }
`;

export const GoogleBadge = styled.a`
  cursor: pointer;
  width: 45%;
  img {
    width: 100%
  }
`;

export const FBButtonContainer = styled.div`
  display: flex;
  width: 55%;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const SeparationLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 44%;
    text-align: center;
    border-bottom: 1px solid #fff;
    line-height: 0.1em;
    margin: 40px 0 0 0;
  }
  span {
    margin: 40px 0 0 0;
    width: 10%;
    text-align: center;
    color: ${palette.white};
  }
`;
export const SignupButtonContainer = styled.div`
  display: ${(props) => (props.responsive ? 'none' : 'flex')};
  justify-content: center;
  width: 50%;
  margin: 0 0 20px 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: ${(props) => (props.responsive ? 'flex' : 'none')};
  }
`;
export const SignupButton = styled(Button)`
  /* background: ${transparentize(0.7, palette.blue)}; */
  background-color: '#000';
  border: 0px;
  border-radius: 20px;
  padding: 10px 15px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '38px'};
  font-size: ${(props) => props.fontSize || '14px'};
  color: ${(props) => props.fontColor || '#fff'};

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.hoverColor
        ? transparentize(props.transparency, props.hoverColor)
        : lighten(0.1, transparentize(props.transparency, palette.blue))};
  }
`;
export const MiddleContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin-top: 10vh;

  @media screen and (max-width: 1024px) {
    /* background-color: #b2227e; */
    margin-bottom: 30px;
  }
`;
export const AnimatedMiddleDiv = styled(animated.div)`
  position: absolute;
  display: flex;
  max-width: 66vw;
  justify-content: space-between;
  align-items: center;
  will-change: transform, opacity;
`;
export const MiddleSlideContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 66vw;
  flex: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MiddleImageWrapper = styled.div`
  img {
    /* display: block; */
    height: auto;
    width: 25vw;
    flex: 1;
  }
  @media screen and (max-width: 1024px) {
    img {
      display: block;
      height: auto;
      width: 50%;
    }
  }
`;
export const MiddleTextWrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 29vw; */
  flex: 1;
  justify-content: center;
  max-width: 25vw;
  color: ${palette.purple};
  font-size: 1.2em;
  line-height: 2.5;
  text-align: justify;
  padding: 0 5vw 0 5vw;

  @media screen and (max-width: 1024px) {
    width: 100%;
    order: 3;
  }
`;
export const MiddleWrapperResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    text-align: center;
    /* margin-top: 50px; */
    padding: 0 7.5%;
  }
`;
export const MiddleButtonsWrapper = styled.div`
  height: 550px;
  /* width: 29vw; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10vh 100px 0 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MiddleButtonsWrapperResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
    padding-top: 50px;
  }
`;
export const MiddleButtonsTitle = styled.div`
  display: block;
  color: ${palette.purple};
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
`;
export const ButtonResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 3% 0;
    width: 100%;
    /* margin-bottom: 50px; */
  }
`;
export const Anchor = styled(HashLink)`
  display: ${(props) => (props.responsive ? 'none' : 'block')};
  width: 100%;
  color: ${(props) => props.color};

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.responsive ? 'block' : 'none')};
  }
`;
export const BottomContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 50px 0 0 7.5%; */
  /* flex-wrap: wrap; */
  /* @media screen and (max-width: 1024px) {
    padding: 0 16px;
  } */

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const BottomInfoWrapper = styled.div`
  height: 100%;
  width: 30%;
  padding: 0 0 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media screen and (max-width: 1024px) {
    width: 100%;
  } */

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* height: 85%; */
  /* @media screen and (max-width: 1024px) {
    width: 100%;
  } */
`;
export const BottomImageWrapper = styled.div`
  display: block;
  width: 55%;
  /* @media screen and (max-width: 1024px) {
    width: 100%;
  } */
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const BottomTitle = styled.div`
  display: block;
  color: ${palette.purple};
  font-size: 1.5em;
  /* margin: 50px 0 50px 0; */
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;
export const BottomText = styled.div`
  display: block;
  color: ${palette.purple};
  font-size: 1em;
  line-height: 2.5;
  margin: 20px 0 20px 0;
  /* text-align: justify; */
  /* margin-bottom: 50px; */

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;
export const AnimatedModal = styled(animated.div)`
  position: absolute;
  max-width: 500px;
  max-height: 500px;
  width: 50ch;
  height: 50ch;
  cursor: pointer;
  will-change: transform, opacity;
`;
export const HiddenText = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    color: ${palette.purple};
    font-size: 1.1em;
    line-height: 2.5;
    margin: 15px 0 20px 0;
  }
`;
export const BodySlideContainer = styled.div`
  width: 100%;
  height: 100%;
`;