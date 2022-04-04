import styled from 'styled-components';
import { palette } from '../../theme';

export const FooterContainer = styled.div`
  height: 269px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.greyMedium};
  padding: 0 100px 0 100px;

  @media screen and (max-width: 1024px) {
    padding: 0 7.5% 0 7.5%;
    height: auto;
  }
`;
export const LeftColumn = styled.div`
  display: block;
  width: 30%;
  color: ${palette.greyDark};
  font-size: 1em;
  /* font-weight: 300; */
  text-align: left;
  line-height: 2;
  /* @media screen and (max-width: 1024px) {
    text-align: center;
    width: 100%;
  } */

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  color: ${palette.greyDark};
  font-size: 1em;
  font-weight: 300;
  /* p {
    color: #707070;
    font-size: 16px;
    font-weight: 300;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  } */

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const RightColumn = styled.div`
  display: block;
  width: 30%;
  color: ${palette.greyDark};
  font-size: 1em;
  /* font-weight: 300; */
  text-align: right;
  line-height: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;
export const Network = styled.a`
  display: block;
  max-width: 60px;
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
`;
export const Terms = styled.div`
  color: ${palette.purple};
  font-size: 1em;
  padding: 10px 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const RightsText = styled.div`
  font-size: 1em;
`;
export const ResponsiveContent = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    padding: 50px 0 30px 0;
  }
`;
export const TextResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    color: ${palette.greyDark};
    font-size: 1em;
    margin: 30px 0;
  }
`;
export const TermsResponsive = styled.div`
  display: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    color: ${palette.purple};
    font-size: 1em;
    padding: 10px 0;
  }
`;
