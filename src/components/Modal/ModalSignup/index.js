import React from 'react';

import { Modal } from '../index';
import { Button } from '../../index';

//STYLES
import { 
  ModalButtonsWrapper,

} from './styles.js';
import { palette } from '../../../theme';

export default function ModalSignup({
  show,
  hide,
  title,
  body,
  save,
}) {
  return (
    <Modal
      show={show}
      hide={hide}
      title={title}
      noExitButton
      maxWidth="20vw"
      maxWidthResponsive="75vw"
    >
        {body}
        <ModalButtonsWrapper>
          <Button
            bordered
            borderColor={palette.blueMedium}
            fontColor={palette.blueMedium}
            width="45%"
            onClick={hide}
          >
            Editar
          </Button>
          <Button
            width="45%"
            onClick={save}
          >
            Salvar
          </Button>
        </ModalButtonsWrapper>
      </Modal>
  );
}
