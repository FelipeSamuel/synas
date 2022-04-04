import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt-BR';
import { palette } from '../../theme';

registerLocale('pt-BR', pt);

export const Container = styled.div`
  width: 55%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid ${palette.white}` : '0px'};
  padding-bottom: ${(props) => (props.borderBottom ? `20px` : '0px')};
`;
export const FormInput = styled.div`
  width: ${(props) => props.width};
  padding: 0 5px 0 5px;
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
export const Text = styled.h2`
  color: white;
  display: ${(props) => (props.responsive ? 'none' : 'block')};
  font-size: ${(props) => (props.responsive ? '1.2em' : '2em')};
  text-align: left;
  font-weight: normal;
  margin-bottom: 50px;
  span {
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.responsive ? 'block' : 'none')};
  }
`;
export const Form = styled.form`
  display: ${(props) => (props.responsive ? 'none' : 'flex')};
  align-items: center;
  justify-items: space-between;
  flex-flow: row wrap;

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.responsive ? 'flex' : 'none')};
  }
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
export const Select = styled.select`
  appearance: none;
  background: white;
  border: 0px;
  border-radius: 20px;
  display: block;
  font-size: 16px;
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;

  .option {
    color: ${palette.purple};
  }
`;

export const ButtonFace = styled.button`
  appearance: none;
  background: linear-gradient(to left, #1b1464, #2b5189);
  border: 0px;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  padding: 10px 15px;
`;
export const DateCustomPicker = styled(DatePicker)`
  /* appearance: none; */
  background: white;
  border: 0px;
  /* border-radius: 20px; */
  display: block;
  font-size: 16px;
  padding: 0;
  width: 100%;
  cursor: pointer;
`;
export const FormHelper = styled.div`
  background: white;
  border: 0px;
  border-radius: 20px;
  display: flex;
  font-size: 16px;
  padding: 10px 20px;
  width: calc(100% - 40px);
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
export const TermsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;
export const CheckboxLabel = styled.div`
  display: inline-block;
  color: ${palette.white};

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  cursor: pointer;
  background-color: white;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 4px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.25);
  margin-right: 0.5em;
`;
export const SeparationLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    flex: 1;
    text-align: center;
    border-bottom: 1px solid ${palette.white};
    line-height: 0.1em;
    margin: 20px 10px 10px 10px;
  }
  span {
    margin: 20px 10px 10px 10px;
    text-align: center;
    color: ${palette.white};
  }
`;
export const SeparationText = styled.div`
  color: ${palette.white};
  font-size: 1.5em;
  font-weight: bold;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: ${palette.purple};

  input {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`;
export const ModalTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 2px 2px 5px ${palette.greyDark};
  background: linear-gradient(to left, #4a5197, #ff0a6c);

  div {
    color: ${palette.white};
    width: 100%;
    text-align: center;
  }
`;
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