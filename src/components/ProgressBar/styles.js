import styled from 'styled-components/';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: flex-start;
  margin: 13px 0;
  padding: 0 15px;
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
`;
export const BarRow = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
`;
export const FillingBar = styled.div`
  display: block;
  height: 100%;
  width: ${(props) => `${props.completed}%`};
  background-color: ${(props) => props.bgColor};
  transition: width 1s ease-in-out;
  border-radius: 0 30px 30px 0;
`;
export const Percentage = styled.div`
  background: ${(props) => props.bgColor};
  display: block;
  flex: 1;
  border-bottom: 13px solid white;
  border-top: 13px solid white;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.bgColor};
  color: white;
  font-weight: 700;
  padding: 5px 0 5px 10px;
  border-radius: 20px 0 0 20px;
  min-width: 99px;
  max-width: 98px;
`;
export const PercentageText = styled.div`
  background: ${(props) => props.bgColor};
  color: white;
  font-weight: 700;
  padding: 5px;
  border-radius: 20px;
`;