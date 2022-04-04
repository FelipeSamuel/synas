import React from 'react';

//COMPONENTS
import { Header } from '../../components';

//STYLE
import { TopContainer, TopWrapper } from './styles';

export default function TopSection(props) {
  return (
    <TopContainer shouldHide={props.shouldHide}>
      <Header
        clickLogo={props.clickLogo}
        clickEnter={props.clickEnter}
        clickExit={props.clickExit}
        clickTheApp={props.clickTheApp}
        clickCompatibilityTest={props.clickCompatibilityTest}
      />
      <TopWrapper>{props.children}</TopWrapper>
    </TopContainer>
  );
}
