import styled from 'styled-components';
import { palette } from '../../../theme';

export const ModalBodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const ModalBodyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  img {
    margin-right: 10px;
  }

  span {
    color: ${palette.purple};
  }
`;

export const ModalButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
