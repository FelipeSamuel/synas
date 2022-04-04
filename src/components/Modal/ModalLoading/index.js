import React from 'react';
import { Line as LineProgressbar } from 'rc-progress';

import { Modal } from '../index';

//ASSETS
import networkWithBackground from '../../../assets/network-with-background.png';

//STYLES
import { 
  ModalLoadingWrapper,
  ModalLoadingImage,
  ModalProgressbarContainer,
} from './styles.js';
import { palette } from '../../../theme';

export default function ModalLoading({
  show,
  hide,
  value,
  smallDisplay,
}) {
  return (
    <Modal
      show={show}
      hide={hide}
      title={
        <ModalLoadingWrapper>
          <ModalLoadingImage smallDisplay={smallDisplay}>
            <img src={networkWithBackground} alt="network.png" />
          </ModalLoadingImage>
          <h4>Estamos calculando sua compatibilidade!</h4>
        </ModalLoadingWrapper>
      }
      noExitButton
      maxWidth="20vw"
      maxWidthResponsive="75vw"
    >
      <ModalProgressbarContainer>
        <LineProgressbar
          percent={value}
          strokeWidth="8"
          strokeColor={palette.blue}
          trailWidth="8"
          trailColor={palette.blueLight}
          strokeLinecap="round"
        />
      </ModalProgressbarContainer>
    </Modal>
  );
}
