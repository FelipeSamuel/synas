import React from 'react';
import { getAge } from '../../utils';

const ModalTitle = (props) => {
  return (
    <b>
      {props.user ? props.user.name : ''},{' '}
      {getAge(props.user ? props.user.birth_date : '')}
    </b>
  );
};

export default ModalTitle;
