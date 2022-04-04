import styled from 'styled-components';
import { palette } from '../../theme';

export const Container = styled.div`
  width: 55%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Text = styled.h2`
  color: white;
  display: ${(props) => (props.responsive ? 'none' : 'block')};
  font-size: 2em;
  text-align: left;
  font-weight: normal;
  margin-bottom: 50px;
  span {
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.responsive ? 'block' : 'none')};
    font-size: 1.2em;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-items: space-between;
  flex-flow: row wrap;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0;
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 10px 0;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
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
  width: calc(100% - 40px);
`;
export const ErrorText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${palette.white};
  min-height: 22px;
`;
