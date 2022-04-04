import styled from 'styled-components';
import { palette } from '../../theme';
import arrowButton from '../../assets/arrow-button.png';

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20% 7.5% 0; */
  height: 60vh;
  width: 100%;
  /* @media screen and (max-width: 1500px) {
    padding: 20% 7.5% 0;
  }
  @media screen and (max-width: 1300px) {
    padding: 10% 7.5% 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 10% 7.5% 0;
  } */
`;
export const ContainersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 35vw;
  padding-bottom: 30px;
  margin-right: 30px;
  /* border-bottom: 7px solid ${palette.white}; */

  /* @media screen and (max-width: 1024px) {
    width: 100%;
  } */
`;
export const ImageMapContainer = styled.div`
  display: block;
  width: 50%;
  height: auto;
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
export const ProfileRow = styled.div`
  display: flex;
  /* flex-flow: row nowrap; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  .icon {
    margin-right: 20px;
    display: flex;
    justify-content: center;
    img {
      display: block;
      height: 3em;
      width: 3em;
    }
  }

  .iconSmall {
    display: flex;
    justify-content: center;
    img {
      display: block;
      height: 2.5em;
      width: 2.5em;
    }
  }
  .text {
    color: ${palette.white};
    font-size: 1em;
    font-weight: 700;
    width: 25% span {
      font-weight: 900;
    }
  }
`;
export const TextContainer = styled.div`
  display: block;
  color: ${palette.white};
  padding-left: 20px;
  width: 100%;
  margin: 15px auto;
  text-transform: capitalize;
`;
export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  white-space: nowrap;
  color: ${palette.white};
`;
export const Subtitle = styled.h2`
  font-size: 1.1em;
  font-weight: 400;
  white-space: nowrap;

  &:hover {
    cursor: ${(props) => (props.clickable ? 'pointer' : 'auto')};
    text-decoration: ${(props) => (props.clickable ? 'underline' : 'none')};
  }
`;
export const IconColumn = styled.div`
  width: 25%;
`;
export const TextColumn = styled.div`
  width: 25%;
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
  right: -35px;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;
