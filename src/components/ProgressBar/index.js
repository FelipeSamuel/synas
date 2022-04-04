import React, { useState, useEffect } from 'react';
import { AnimatedNumber } from '../index';

//STYLE
import {
  Wrapper,
  BarRow,
  FillingBar,
  Percentage,
  Title,
  PercentageText,
} from './styles';

export default function ProgressBar({ color, percentage, title }) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setTimeout(() => setCompleted(percentage), 2000);
  }, [percentage]);

  return (
    <Wrapper>
      <Title bgColor={color}>{title}</Title>
      <BarRow>
        <FillingBar completed={completed} bgColor={color} />
        <Percentage bgColor={color} />
      </BarRow>
      <PercentageText bgColor={color}>
        <AnimatedNumber value={percentage} duration={1000} delay={2000} />%
      </PercentageText>
    </Wrapper>
  );
}
