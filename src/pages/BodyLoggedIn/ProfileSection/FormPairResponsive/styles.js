import styled from 'styled-components/';
import DatePicker from 'react-datepicker';
import { palette } from '../../../../theme';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-radius: 20px;
  padding: 15px;
  min-width: 300px;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    border: 0;
    padding: 30px 0 0 0;
  }
`;
export const FormRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  border-bottom: ${(props) =>
    props.borderBottom ? `1px solid ${palette.purple}` : '0px'};
  padding-bottom: ${(props) => (props.borderBottom ? '30px' : '0px')};

  @media screen and (max-width: 1024px) {
    width: 80%;
    flex-flow: row wrap;
  }
`;
export const FormItem = styled.div`
  flex: 1;
  flex-direction: column;
  margin: ${(props) =>
    props.marginRight ? '0 5px 0 0' : props.marginLeft ? '0 0 0 5px' : '0'};

  @media screen and (max-width: 1024px) {
    flex-flow: row wrap;
  }
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
  margin: 0 0 0 0;


  :disabled {
    text-decoration: line-through;

    ::placeholder {
      /* background: ${palette.greyDark}; */
      text-decoration: line-through;
    }
  }
`;
export const FormHelper = styled.div`
  background: white;
  border: 0px;
  border-radius: 20px;
  display: flex;
  font-size: 16px;
  padding: 10px 20px;
  width: calc(100% - 40px);

  .react-datepicker-popper {
    z-index: 5 !important;
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

  &:disabled {
    background: lightgray;
  }
`;
export const Select = styled.div`
  appearance: none;
  background: white;
  border: 0px;
  border-radius: 20px;
  display: block;
  font-size: 16px;
  padding: 10px 20px;
  width: calc(100% - 40px);

  select {
    display: block;
    border: none;
    width: 100%;
  }
`;
export const Autocomplete = styled.div`
  position: relative;
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
export const ErrorText = styled.div`
  color: ${palette.yellow};
  font-size: 1rem;
  font-weight: 700;
  min-height: 22px;
`;
export const SeparationLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  div {
    flex: 1;
    text-align: center;
    border-bottom: 1px solid ${palette.purple};
    line-height: 0.1em;
    margin: 20px 0px 10px 0px;
  }
  span {
    flex: 2;
    min-width: 210px;
    margin: 20px 10px 10px 10px;
    text-align: center;
    color: ${palette.purple};
  }
`;
export const Text = styled.div`
  color: ${palette.white};
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 10px 0 10px;
`;
