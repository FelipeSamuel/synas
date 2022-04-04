import styled from 'styled-components';
import { animated } from 'react-spring';
import arrowButton from '../../../assets/arrow-button.png';
import { palette } from '../../../theme';

export const CompatibilityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1600px;
  padding: 50px 7.5%;
  position: relative;
  width: 85%;

  @media screen and (max-width: 1024px) {
    padding: 0 7.5%;
  }
`;
export const Wrapper = styled.div`
  display: block;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const ResponsiveWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
  }
`;
export const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;
export const ProgressbarText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.white};
  font-size: 1.7em;
  font-weight: bold;
  padding-bottom: 0.7em;

  @media screen and (max-width: 1024px) {
    font-size: 1.2em;
  }
`;
export const PercentageBarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 0;
`;
export const TextSlidesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  will-change: transform, opacity;
  width: 100%;
  margin: 20px 0 20px 0;

  @media screen and (max-width: 1024px) {
    height: 400px;
  }
`;
export const AnimatedTextBox = styled(animated.div)`
  position: absolute;
  display: block;
  border: ${(props) =>
    props.affinity
      ? `1px solid ${palette.yellow}`
      : props.love
      ? `1px solid ${palette.pink}`
      : `1px solid ${palette.blueMedium}`};
  border-radius: 15px;
  padding: 20px 5px;
  will-change: transform, opacity;
  /* position: relative; */

  h2 {
    color: ${palette.purple};
    font-size: 18px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: ${palette.purple};
  }

  @media screen and (max-width: 1024px) {
    height: 350px;
    overflow-y: scroll;
  }
`;
// export const AnimatedTopDiv = styled(animated.div)`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   will-change: transform, opacity;
//   /* max-width: 100vw; */
//   width: 80vw;
// `;
export const InfoTextContainer = styled.div`
  overflow-y: auto;
  max-height: 500px;
  padding: 0 20px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) =>
      props.affinity
        ? `${palette.yellow}`
        : props.love
        ? `${palette.pink}`
        : `${palette.blueMedium}`};
    border-left: 2px solid white;
    border-right: 2px solid white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.affinity
        ? `${palette.yellow}`
        : props.love
        ? `${palette.pink}`
        : `${palette.blueMedium}`};
    border-radius: 10px;
    border-left: ${(props) =>
      props.affinity
        ? `1px solid ${palette.yellow}`
        : props.love
        ? `1px solid ${palette.pink}`
        : `1px solid ${palette.blueMedium}`};
    border-right: ${(props) =>
      props.affinity
        ? `1px solid ${palette.yellow}`
        : props.love
        ? `1px solid ${palette.pink}`
        : `1px solid ${palette.blueMedium}`};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Next = styled.div`
  margin: 10px 20px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: ${(props) =>
    props.affinity
      ? `20px solid ${palette.yellow}`
      : props.love
      ? `20px solid ${palette.pink}`
      : `20px solid ${palette.blueMedium}`};

  &:hover {
    cursor: pointer;
  }
`;
export const Prev = styled.div`
  margin: 10px 20px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: ${(props) =>
    props.affinity
      ? `20px solid ${palette.yellow}`
      : props.love
      ? `20px solid ${palette.pink}`
      : `20px solid ${palette.blueMedium}`};

  &:hover {
    cursor: pointer;
  }
`;
export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
`;
export const ProfileInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* @media screen and (max-width: 1024px) {
    width: 100%;
  } */
`;
export const ImageMapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 20px 0 30px 0;

  img {
    height: auto;
    width: 80%;
  }
  /* @media screen and (max-width: 1024px) {
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
  } */
`;
// export const MapaPerfil = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   align-items: center;
//   justify-content: space-between;
//   margin: 25px auto;
//   width: 100%;
// `;
export const ProfilePhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
export const ProfileRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 90%;
`;
export const TextContainer = styled.div`
  display: block;
  color: ${palette.purple};
  width: 100%;
  margin: 0 auto;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-size: 1.2em;
  font-weight: 700;
  white-space: nowrap;
  color: ${palette.purple};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 25vw;

  @media screen and (max-width: 1024px) {
    font-size: 0.9em;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1em;
  font-weight: 400;
  white-space: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 1024px) {
    font-size: 0.8em;
    width: 100%;
  }
`;
export const IconColumn = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1500px) {
    img {
      width: 2vw;
      height: auto;
    }
  }

  @media screen and (max-width: 1300px) {
    img {
      width: 1.5vw;
      height: auto;
    }
  }
  
  @media screen and (max-width: 1024px) {
    img {
      width: 5vw;
      height: auto;
    }
  }
`;
export const TextColumn = styled.div`
  width: 23.3%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${(props) => (props.rightAlign ? 'right' : 'left')};
`;
export const Loading = styled.img`
  height: 30px;
`;
export const ArrowButton = styled.div`
  background-image: url(${arrowButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 60px;
  right: ${(props) => props.first && '10px'};
  left: ${(props) => props.second && '10px'};
  z-index: 2;
`;
export const ColoredLine = styled.div`
  width: 100%;
  height: 3px;
  background: transparent
    linear-gradient(270deg, #4a5197 0%, #a92b80 49%, #e61371 83%, #ff0a6c 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 1px #00000033;
`;
export const ProgressCircleContainer = styled.div`
  width: 80%;
`;
export const ModalText = styled.div`
  height: 500px;
  overflow: scroll;
  margin: 20px 0 20px 0;
  font-size: 0.8em;
  color: ${palette.greyDark};
  padding: 0 10px 0 10px;
`;
export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  overflow: scroll;

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
`;
export const InfoPopoverBody = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InfoPopoverRow = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const InfoPopoverRowContent = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;
  color: ${palette.purple};
`;