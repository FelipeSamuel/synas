import styled from 'styled-components';
import { palette } from '../../theme';

export const Container = styled.div`
  /* width: 55%; */
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* height: 50vh; */
  }
`;
export const LoggedInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ResponsiveLoggedInHeader = styled.div`
  display: none;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 30px 0;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image: linear-gradient(
      to left,
      #4a5197 0%,
      #a92b80 49%,
      #e61371 83%,
      #ff0a6c 100%
    )
    0 0 1 0;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;
export const ResponsiveDotsContent = styled.div`
  display: none;
  padding: 0 0 0 15px;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
export const ResponsiveDots = styled.div`
  display: none;
  width: 7px;
  height: 7px;
  background-color: ${palette.purple};
  border-radius: 50%;
  margin: 15px 0;
  position: relative;

  &::before,
  &::after {
    margin: 0 auto;
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    background-color: ${palette.purple};
    border-radius: 50%;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -9px;
  }
  &::after {
    bottom: -9px;
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
export const MenuListResponsive = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.menuMobile ? 'flex' : 'none')};
    justify-content: space-around;
    align-items: center;
    position: relative;
    /* width: 80%; */
    flex-flow: column nowrap;
    background: white;
    padding: 20px;
    position: absolute;
    text-align: center;
    top: 70px;
    right: 0;
    border-radius: 20px;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
    z-index: 10;

    div {
      margin: 10px 0;
    }
  }
`;
export const MenuItem = styled.div``;
export const ImageLogo = styled.img`
  display: block;
  max-width: 140px;
  z-index: 2;
  position: relative;
  height: 1.8em;
  width: auto;

  &:hover {
    cursor: pointer;
  }
`;
export const Text = styled.h2`
  font-size: 1.2em;
  font-weight: 700;
  white-space: nowrap;
  color: ${palette.purple};
`;
export const ButtonContainer = styled.div`
  display: none;
  margin: 0 0 50px 0;
  width: 80%;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
