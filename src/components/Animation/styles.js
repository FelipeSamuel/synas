import styled from 'styled-components/';
import { animated } from 'react-spring';

export const AnimatedDiv = styled(animated.div)`
  .simple-trans-main {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 800;
    font-size: 25em;
    will-change: transform, opacity;
    text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
  }
`;
