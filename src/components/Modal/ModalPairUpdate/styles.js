import styled from 'styled-components';
import { palette } from '../../../theme';


export const ModalButtonContainer = styled.div`
  width: 100%;
`;
export const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  h4 {
    color: ${palette.white};
    font-size: 20px;
    margin: 5px 0 0 0;
  }

  h5 {
    color: ${palette.white};
    font-size: 15px;
    margin: 10px 0 10px 0;
  }
`;
export const ModalImage = styled.div`
  display: block;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    height: auto;
    width: 50%;
  }

  /* @media screen and (max-width: 1024px) {
    width: 55%;
    display: ${(props) => (props.smallDisplay ? 'none' : 'block')};
    margin-bottom: 20px;
  } */

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.responsive ? 'flex' : 'none')};
  }
`;
export const ModalForm = styled.form`
  display: ${(props) => (props.responsive ? 'none' : 'flex')};
  align-items: center;
  justify-items: space-between;
  flex-flow: row wrap;
`;
export const ModalFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
export const ModalFormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid ${palette.white}` : '0px'};
  padding-bottom: ${(props) => (props.borderBottom ? `20px` : '0px')};
`;
export const ModalFormInput = styled.div`
  width: ${(props) => props.width};
  padding: 0 5px 0 5px;
`;
export const Input = styled.input`
  appearance: none;
  background: white;
  border: 0px;
  border-radius: 20px;
  display: block;
  font-size: 16px;
  padding: 10px 20px;
  width: calc(100% - 40px);
  height: 18px;

  &:disabled {
    background: lightgray;
  }
`;
export const Autocomplete = styled.div`
  position: relative;
`;
export const ListFloat = styled.div`
  position: absolute;
  background: white;
  top: 2px;
  left: 0;
  border-radius: 20px;
  width: 100%;
  min-width: 100px;
  max-height: 300px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  overflow-y: scroll;
  z-index: 999;

  div {
    cursor: pointer;
    padding: 10px;
    &:hover {
      background: #dedede;
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 2em; /* Total width including border-width of scrollbar thumb */
    height: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border: 15px solid rgba(0, 0, 0, 0); /* Transparent border together with background-clip: padding-box does the trick */
    background-clip: padding-box;
    -webkit-border-radius: 1px;
    background-color: transparent;
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.025);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    height: 2em;
    border: 12px solid rgba(0, 0, 0, 0); /* Transparent border together with background-clip: padding-box does the trick */
    background-clip: padding-box;
    -webkit-border-radius: 1em;
    background-color: ${palette.pink};
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${palette.pink};
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    max-height: 25vh;
  }
`;
export const LoadingFloat = styled.div`
  position: absolute;
  background: lightgray;
  top: 2px;
  left: 0;
  border-radius: 20px;
  width: 100%;
  min-width: 100px;
  max-height: 300px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    max-height: 25vh;
  }
`;
export const Loading = styled.img`
  height: 2.3em;
  width: 2.3em;
`;
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
export const ErrorText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${palette.yellow};
  min-height: 22px;
  font-weight: bold;
`;