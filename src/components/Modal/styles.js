import styled from 'styled-components';
import { animated } from 'react-spring';
import { palette } from '../../theme';

export const ModalContainer = styled(animated.div)`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 20;

  /* position: absolute; */
  /* max-width: 500px;
  max-height: 500px;
  width: 50ch;
  height: 50ch;
  cursor: pointer; */
  will-change: transform, opacity;
`;
export const ModalBody = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${(props) => (props.coloredBackground ? 
    `transparent
    linear-gradient(0deg, #4a5197 0%, #a92b80 25%, #e61371 83%, #ff0a6c 100%)
    0% 0% no-repeat padding-box`
    : palette.white)};
  border-radius: 20px;
  /* max-height: 80vh; */
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '90vw')};
  max-height: 75vh;
  overflow: auto;
  /* width: 30%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  @media screen and (max-width: 1024px) {
    max-width: ${(props) =>
      props.maxWidthResponsive ? props.maxWidthResponsive : '90vw'};
    width: 80%;
  }
`;
export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${palette.purple};
  font-size: 1em;
  margin-bottom: 30px;
`;
export const CloseButton = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  color: ${palette.purple};
  background: ${palette.white};
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
  }
`;
