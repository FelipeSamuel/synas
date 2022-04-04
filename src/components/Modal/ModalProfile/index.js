import React from 'react';

import { Modal } from '../index';
import { Button } from '../../index';

//STYLES
import { 
  ModalButtonContainer,
} from './styles.js';

export default function ModalProfile({
  show,
  hide,
  title,
  body,
}) {
  return (
    <Modal
      show={show}
      hide={hide}
      title={title}
    >
        {body}
        <ModalButtonContainer>
          <Button
            onClick={hide}
          >
            Voltar
          </Button>
        </ModalButtonContainer>
      </Modal>
  );
}
