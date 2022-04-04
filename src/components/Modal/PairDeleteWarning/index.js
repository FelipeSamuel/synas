import React, { useState } from 'react';
import { ModalBodyRow, ModalBodyWrapper, ModalButtonsWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import dangerImg from '../../../assets/danger.svg';

import { Button } from '../../index';
import { Modal } from '../index';

import { palette } from '../../../theme';
import { USER_PAIRS } from '../../../constants/variables';

import { Creators as PairsActions } from '../../../store/ducks/pairs';
import { deletePair } from '../../../services';

const PairDeleteWarning = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.pairs.isDeleteModalOpen);
  const idToDelete = useSelector((state) => state.pairs.pairToDelete);
  const pairs = useSelector((state) => state.pairs.pairs);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deletePair(idToDelete);
      const fPairs = pairs.filter((pair) => pair.id !== idToDelete);
      dispatch(PairsActions.setPairs(fPairs));
      localStorage.setItem(USER_PAIRS, JSON.stringify(fPairs));
      setIsLoading(false);
      handleClose();
    } catch (error) {
      if (
        error.response.status === 500 &&
        error.response.data.error === 'db_error'
      )
        alert(
          'Ocorreu um erro ao apagar o card, recarregue a página e tente novamente'
        );
    }
  };

  const handleClose = () => {
    dispatch(PairsActions.closeModal());
  };

  return (
    <Modal
      show={isOpen}
      hide={handleClose}
      title="Você tem certeza que deseja apagar esse card?"
      noExitButton
      maxWidth="20vw"
      maxWidthResponsive="75vw"
    >
      <ModalBodyWrapper>
        <ModalBodyRow>
          <img src={dangerImg} alt="danger" />
          <span>
            <b>Você não poderá voltar atrás caso escolha apaga-lo!</b>
          </span>
        </ModalBodyRow>
      </ModalBodyWrapper>

      <ModalButtonsWrapper>
        {isLoading ? (
          ''
        ) : (
          <Button
            bordered
            borderColor={palette.blueMedium}
            fontColor={palette.blueMedium}
            width="45%"
            onClick={handleClose}
          >
            Cancelar
          </Button>
        )}

        {isLoading ? (
          <Button width="45%">Aguarde...</Button>
        ) : (
          <Button width="45%" onClick={handleDelete}>
            Confirmar
          </Button>
        )}
      </ModalButtonsWrapper>
    </Modal>
  );
};

export default PairDeleteWarning;
