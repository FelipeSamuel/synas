import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { animated } from 'react-spring';
import { palette } from '../../theme';

export const Container = styled.div`
  /* width: 55%; */
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* height: 50vh; */
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
    margin-top: 50px;
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
  display: ${props => (props.responsive ? 'none' : 'block')};
  width: 100%;
  color: ${props => props.color};

  @media screen and (max-width: 1024px) {
    display: ${props => (props.responsive ? 'block' : 'none')};
  }
`;
export const BottomContainer = styled.div`
  max-height: 800px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
export const BottomTerms = styled.div`
  color: ${palette.purple};
  font-size: 1em;
  padding: 10px 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
export const ModalText = styled.div`
  height: 500px;
  overflow: scroll;
  margin: 20px 0 20px 0;
  font-size: 0.8em;
  color: ${palette.greyDark};
  padding: 0 10px 0 10px;
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
