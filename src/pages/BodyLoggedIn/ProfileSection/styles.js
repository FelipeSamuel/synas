import styled from 'styled-components';
import arrowButton from '../../../assets/arrow-button.png';
import { palette } from '../../../theme';

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 100px 0 100px;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;
export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const ProfileInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 30px 0 0 0;
  }
`;
export const ImageMapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;

  img {
    height: auto;
    width: 35vw;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 50px;

    img {
      height: auto;
      width: 70vw;
    }
  }
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
  margin-right: 20px;
  display: flex;
  justify-content: center;

  img {
    display: block;
    height: 2.5em;
    width: 2.5em;
  }

  .iconSmall {
    display: flex;
    justify-content: center;

    img {
      display: block;
      height: 2em;
      width: 2em;
    }
  }
  .text {
    color: ${palette.purple};
    font-size: 1em;
    font-weight: 700;
    width: 25% span {
      font-weight: 900;
    }
  }

  @media screen and (max-width: 1024px) {
    img {
      height: 1.5em;
      width: 1.5em;
    }
    .iconSmall {
      img {
        height: 1.2em;
        width: 1.2em;
      }
    }
    .text {
      font-size: 0.8em;
      font-weight: normal;
    }
  }
`;
export const TextContainer = styled.div`
  display: block;
  color: ${palette.purple};
  width: 100%;
  margin: 15px auto;
  text-transform: capitalize;
`;
export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  white-space: nowrap;
  color: ${palette.purple};
`;
export const Subtitle = styled.h2`
  font-size: 1.1em;
  font-weight: 400;
  white-space: nowrap;
`;
export const IconColumn = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    img {
      width: 1.7em;
      height: auto;
    }
  }
`;
export const TextColumn = styled.div`
  width: 23.3%;
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
  height: 70px;
  width: 70px;
  position: absolute;
  bottom: -35px;
  z-index: 2;
  transform: scaleY(-1);

  &:hover {
    cursor: pointer;
  }
`;
export const ColoredLine = styled.div`
  width: 100%;
  height: 3px;
  background: transparent
    linear-gradient(270deg, #4a5197 0%, #a92b80 49%, #e61371 83%, #ff0a6c 100%)
    0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 1px #00000033;
`;
export const Wrapper = styled.div`
  display: block;
  width: 100%;

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
    /* margin-bottom: 50px; */
  }
`;
export const ButtonResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    width: 80%;
    margin-bottom: 30px;
    z-index: 2;
  }
`;
export const HiddenInfo = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    background-color: ${palette.grey};
  }
`;
export const PairWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;