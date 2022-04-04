import styled from 'styled-components/';
import bgColor from '../../assets/clip-path.svg';
import bgColorSmall from '../../assets/background-responsive.png';

export const TopContainer = styled.div`
  display: block;
  height: 80vh;
  padding-bottom: 20vh;
  background-image: url(${bgColor});
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  background-position: bottom;
  background-attachment: fixed;

  @media screen and (max-width: 700px) {
    display: ${props => (props.shouldHide ? 'none' : 'block')};
    background-image: url(${bgColorSmall});
    background-attachment: scroll;
    height: 850px;
    /* padding: 0 0 150px 0; */
  }

  @media screen and (max-width: 1024px) {
    display: ${props => (props.shouldHide ? 'none' : 'block')};
    background-image: url(${bgColorSmall});
    background-attachment: scroll;
    height: 1000px;
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  margin: 0px auto;
  max-width: 1600px;
  padding: 0 7.5%;
  position: relative;
  width: 80%;
  height: 100%;
  /* z-index: 2; */

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: wrap;
    /* max-height: 100vh; */
    height: 100%;
    margin: 150px auto;
    /* z-index: 0; */
  }
`;
