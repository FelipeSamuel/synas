import React from 'react';
import { Popover } from '@varld/popover';

import Info from '../../assets/info.png';

export default function InfoPopover(props) {
  return (
    <Popover popover={({ visible, open, close }) => {
      return props.children
    }}>
      <button style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
        <img style={{ width: 16, height: 16}} src={Info} alt="" />
      </button>
    </Popover>
  );
}
