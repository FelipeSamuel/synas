import React from 'react';

//STYLE
import { BodyContainer, BodyGrid } from './style';

export default function BodySection(props) {
  return (
    <BodyContainer>
      <BodyGrid>{props.children}</BodyGrid>
    </BodyContainer>
  );
}
