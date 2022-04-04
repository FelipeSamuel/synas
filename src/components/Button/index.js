import React from 'react';

//ASSETS
import loading from '../../assets/load.svg';

//STYLE
import {
  ButtonDefault,
  ButtonTransparent,
  ButtonBordered,
  ButtonFacebook,
  ButtonSynas,
  Loading,
} from './styles';

export default function Button(props) {
  if (props.facebook) {
    return (
      <ButtonFacebook
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        hoverColor={props.hoverColor}
        shadow={props.shadow}
        bold={props.bold}
        loading={props.loading}
      >
        {props.loading ? (
          <Loading src={loading} alt="loading" />
        ) : (
          props.children
        )}
      </ButtonFacebook>
    );
  } else if (props.synas) {
    return (
      <ButtonSynas
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        hoverColor={props.hoverColor}
        shadow={props.shadow}
        bold={props.bold}
        loading={props.loading}
      >
        {props.loading ? (
          <Loading src={loading} alt="loading" />
        ) : (
          props.children
        )}
      </ButtonSynas>
    );
  } else if (props.transparency) {
    return (
      <ButtonTransparent
        onClick={props.onClick}
        transparency={props.transparency}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        hoverColor={props.hoverColor}
        backgroundColor={props.backgroundColor}
        shadow={props.shadow}
        bold={props.bold}
        loading={props.loading}
      >
        {props.loading ? (
          <Loading src={loading} alt="loading" />
        ) : (
          props.children
        )}
      </ButtonTransparent>
    );
  } else if (props.bordered) {
    return (
      <ButtonBordered
        onClick={props.onClick}
        borderColor={props.borderColor}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        hoverColor={props.hoverColor}
        backgroundColor={props.backgroundColor}
        shadow={props.shadow}
        bold={props.bold}
        loading={props.loading}
      >
        {props.loading ? (
          <Loading src={loading} alt="loading" />
        ) : (
          props.children
        )}
      </ButtonBordered>
    );
  } else {
    return (
      <ButtonDefault
        facebook={props.facebook}
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        backgroundColor={props.backgroundColor}
        shadow={props.shadow}
        bold={props.bold}
        loading={props.loading}
      >
        {props.loading ? (
          <Loading src={loading} alt="loading" />
        ) : (
          props.children
        )}
      </ButtonDefault>
    );
  }
}
