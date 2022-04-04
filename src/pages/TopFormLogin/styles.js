import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* height: 50vh; */
  }
`;
export const ErrorText = styled.div`
  color: yellow;
  font-size: 1rem;
  font-weight: 700;
  min-height: 22px;
  height: 30px;
`;
export const Modal = styled.div`
  color: yellow;
  font-size: 1rem;
  font-weight: 700;
`;
// export const Text = styled.h2`
//   color: white;
//   display: block;
//   font-size: 30px;
//   text-align: left;
//   font-weight: normal;
//   margin-bottom: 50px;
//   span {
//     font-weight: bold;
//   }

//   @media screen and (max-width: 1024px) {
//     display: none;
//   }
// `;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-items: space-between;
  flex-flow: row wrap;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    display: flex;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const FormComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;

  @media screen and (max-width: 1024px) {
    margin: ${props => (props.small ? '0 0 10px 0' : '0 0 20px 0')};
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

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px 10px;
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
  width: calc(100% - 40px);
`;
export const LinkPassword = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 20px 0;
  text-align: right;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    margin: 0 0 10px 0;
  }
`;
// export const FBButtonContainer = styled.div`
//   display: ${props => (props.responsive ? 'none' : 'flex')};
//   width: 50%;
//   margin: 0 0 20px 0;
//   display: flex;
//   flex-direction: column;

//   @media screen and (max-width: 1024px) {
//     display: ${props => (props.responsive ? 'flex' : 'none')};
//     width: 100%;
//   }
// `;
// export const SignupButtonContainer = styled.div`
//   display: ${props => (props.responsive ? 'none' : 'flex')};
//   justify-content: center;
//   width: 50%;
//   margin: 0 0 20px 0;

//   @media screen and (max-width: 1024px) {
//     width: 100%;
//     display: ${props => (props.responsive ? 'flex' : 'none')};
//   }
// `;
// export const SignupButton = styled(Button)`
//   /* background: ${transparentize(0.7, palette.blue)}; */
//   background-color: '#000';
//   border: 0px;
//   border-radius: 20px;
//   padding: 10px 15px;
//   width: ${props => props.width || '100%'};
//   height: ${props => props.height || '38px'};
//   font-size: ${props => props.fontSize || '14px'};
//   color: ${props => props.fontColor || '#fff'};

//   &:hover{
//       cursor: pointer;
//       background: ${props =>
//         props.hoverColor
//           ? transparentize(props.transparency, props.hoverColor)
//           : lighten(0.1, transparentize(props.transparency, palette.blue))};
//   };
// `;
// export const SeparationLine = styled.div`
//   width: 100%;
//   text-align: center;
//   border-bottom: 1px solid #fff;
//   color: ${palette.white};
//   line-height: 0.1em;
//   margin: 40px 0 20px 0;
//   span {
//     background: #b2227e;
//     padding: 0 10px;
//   }
// `;
