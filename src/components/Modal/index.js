import React from 'react';
import { useSpring } from 'react-spring';

//STYLES
import { ModalContainer, ModalBody, TitleBar, CloseButton } from './styles.js';

export const Modal = ({
  show,
  hide,
  title,
  noExitButton,
  maxWidth,
  maxWidthResponsive,
  children,
  coloredBackground,
}) => {
  const { transform } = useSpring({
    from: { transform: 0 },
    transform: show ? 1 : 0,
    config: { duration: 250 },
  });

  return (
    <ModalContainer
      show={show}
      style={{
        opacity: transform.interpolate({ range: [0, 1], output: [0.3, 1] }),
        transform: transform
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          })
          .interpolate((x) => `scale(${transform})`),
      }}
    >
      <ModalBody 
        maxWidth={maxWidth} 
        maxWidthResponsive={maxWidthResponsive}
        coloredBackground={coloredBackground}
      >
        <TitleBar>
          {title}
          {!noExitButton && <CloseButton onClick={hide}>X</CloseButton>}
        </TitleBar>
        {children}
      </ModalBody>
    </ModalContainer>
  );
}
