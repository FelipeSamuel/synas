import React, { useState } from 'react';
import { useTransition } from 'react-spring';

//STYLE
import { AnimatedDiv } from './styles';

export default function Animation({ items, change }) {
  const [index] = useState(0);
  // const onClick = useCallback(i => set(i), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <AnimatedDiv>
      {transitions.map(({ item, props, key }) => {
        return items[item];
        // const Page = <animated.div>items[item]</animated.div>;
        // return <Page key={key} style={props} />;
      })}
    </AnimatedDiv>
  );
}
