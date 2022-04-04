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
`;
export const FormInput = styled.div`
  width: ${props => props.width};
  padding: 0 5px 0 5px;
`;
export const ErrorText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${palette.white};
  min-height: 22px;
`;
export const Modal = styled.div`
  color: ${palette.white};
`;
export const Text = styled.h2`
  color: white;
  display: ${props => (props.responsive ? 'none' : 'block')};
  font-size: ${props => (props.responsive ? '1.2em' : '2em')};
  text-align: left;
  font-weight: normal;
  margin-bottom: 50px;
  span {
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
    display: ${props => (props.responsive ? 'block' : 'none')};
  }
`;
export const Form = styled.form`
  display: ${props => (props.responsive ? 'none' : 'flex')};
  align-items: center;
  justify-items: space-between;
  flex-flow: row wrap;

  @media screen and (max-width: 1024px) {
    display: ${props => (props.responsive ? 'flex' : 'none')};
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
  border-radius: 20px;
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
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  overflow: hidden;
  div {
    cursor: pointer;
    padding: 10px;
    &:hover {
      background: #dedede;
    }
  }
`;
