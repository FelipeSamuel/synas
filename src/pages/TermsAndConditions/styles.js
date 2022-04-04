import styled, { createGlobalStyle } from 'styled-components';
import { palette } from '../../theme';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
`;
export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
        font-family: 'Nunito', sans-serif;
        height: 100%;
    }
`;

export const TermsText = styled.div`
  margin: 20px 0 20px 0;
  font-size: 0.8em;
  color: ${palette.greyDark};
  padding: 0 2rem 1rem 2rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const ButtonContainer = styled.div`
  width: 50%;
`;
