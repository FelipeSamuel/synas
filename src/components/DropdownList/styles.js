import styled from 'styled-components/';
import { palette } from '../../theme';

export const InputWrapper = styled.div`
  flex: 1;
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
export const Input = styled.input`
  appearance: none;
  background: white;
  border: 0px;
  border-radius: 20px;
  display: block;
  font-size: 16px;
  padding: 10px 20px;
  width: calc(100% - 40px);

:disabled {
  text-decoration: line-through;
  background-color:lightgray;

  ::placeholder {
    /* background: ${palette.greyDark}; */
    text-decoration: line-through;
  }
}
`;
