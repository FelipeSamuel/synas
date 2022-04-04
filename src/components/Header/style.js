import styled from 'styled-components/';
import { palette } from '../../theme';

//MENU
export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 0 30px 0;
  padding-top: 25px;
  z-index: 10;
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
export const ImageLogo = styled.img`
  display: block;
  max-width: 140px;
  height: auto;
  width: 25%;
  z-index: 2;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;
export const MenuList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 80%;
  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
    background: white;
    padding: 20px;
    position: absolute;
    text-align: center;
    top: 30px;
    right: 0;
    border-radius: 20px;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.5);
    display: ${(props) => (props.menuMobile ? 'flex' : 'none')};
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

    div {
      margin: 10px 0;
    }
  }
`;
export const MenuItem = styled.div`
    /* border-radius: 30px; */
    /* color: white; */
    /* list-style: none; */
    /* padding: 7px 20px; */
    /* cursor: pointer; */
    /* transition: all 0.2s 0s linear; */
    /* font-size: 1.2vw; */
    /* @media screen and (max-width: 1024px) {
            color: #000;
        }
    &:hover{
        background-color: ${(props) => (props.logar ? '#3ACCE1' : '#8f3686')};
    }
    a{
        color: white;
        text-decoration: none;
        @media screen and (max-width: 1024px) {
            color: #000;
        }
    } */
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
  background-color: white;
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
    background-color: white;
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
export const InfoPopoverBody = styled.div`
  padding: 0 10px;
`;
export const InfoPopoverText = styled.div`
  align-items: center;
  text-align: left;
  color: ${palette.purple};
  font-size: 18px;
  width: 40vw;
`;