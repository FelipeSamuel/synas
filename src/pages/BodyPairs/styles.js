import styled from 'styled-components/';
import FastCarousel from 'react-fast-carousel';
import { palette } from '../../theme';

export const PairsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Wrapper = styled.div`
  width: 80vw;
  height: auto;
  padding: 20px 0 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;

  /* @media screen and (max-width: 1024px) {
    padding: 0 0 20px 0;
  } */
`;
export const PairsTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${palette.purple};
  font-size: 1.5em;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 1em;
    margin: 0 0 10px 0;
  }
`;
export const CarouselContainer = styled.div`
  width: 100%;
  height: 450px;
  padding: 60px 0 30px 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const CarouselContainerResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    /* width: 100%; */
    /* height: auto; */
    height: 400px;
    /* padding: 60px 0 30px 0; */
  }
`;
export const Carousel = styled(FastCarousel)`
  background-color: red;

  & > div {
    background-color: red;

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${palette.purple};
      border-left: 2px solid white;
      border-right: 2px solid white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${palette.purple};
      border-radius: 10px;
      border-left: ${palette.purple};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
export const CarouselCard = styled.div`
  width: 225px;
  height: 330px;
  background-color: ${palette.white};
  border: 1px solid rgba(208, 28, 119, 0.1);
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px;
  margin: 5px auto 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 75%;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.05);
    margin: 0 5px 0 5px;
  }
`;
export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  white-space: nowrap;
  color: ${palette.purple};
  margin: 5px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 12vw;

  @media screen and (max-width: 1024px) {
    max-width: 45vw;
  }
`;
export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${(props) =>
    props.first ? '30px 0 0 0' : props.last ? '0 0 30px 0' : '10px 0 10px 0'};

  img {
    display: block;
    height: 2em;
    width: 2em;
  }
  .text {
    color: ${palette.purple};
    font-size: 0.8em;
    font-weight: 500;
    span {
      font-weight: 900;
    }
  }
`;
export const CardText = styled.div`
  width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const EmptyCarousel = styled.div`
  width: 100%;
  color: ${palette.purple};
  font-size: 1em;

  @media screen and (max-width: 1024px) {
    font-size: 0.8em;
    margin: 30px 0 30px 0;
    text-align: center;
  }
`;

export const TrashIconContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  cursor: pointer;
  color: rgb(179, 179, 179, 0.6);

  & > img {
    height: 1.6rem;
  }
`;
