import React from 'react';

import {
  InfoPopoverBody,
  InfoPopoverRow,
  InfoPopoverRowContent,
} from '../../pages/BodyCompatibility/CompatibilitySection/styles';
import { InfoPopover } from '..';

import venus from '../../assets/venus.svg';
import mars from '../../assets/mars.svg';

import { getRoundedPartial } from '../../utils';
import { palette } from '../../theme/index';

const SexBarTitle = (props) => (
  <>
    sexo
    <InfoPopover>
      <InfoPopoverBody>
        <InfoPopoverRow>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={mars}
                alt=""
              />
              +
              <img
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
                src={venus}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoSexoMarVen}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorSexoMarVen
                    )}%`,
                    backgroundColor: palette.blue,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorSexoMarVen)
                    }%`,
                    backgroundColor: palette.blue,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.blue,
                }}
              >
                {getRoundedPartial(props.compatibility.valorSexoMarVen)}%
              </div>
            </p>
          </InfoPopoverRowContent>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={venus}
                alt=""
              />
              +
              <img
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
                src={mars}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoSexoVenMar}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorSexoVenMar
                    )}%`,
                    backgroundColor: palette.blue,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorSexoVenMar)
                    }%`,
                    backgroundColor: palette.blue,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.blue,
                }}
              >
                {getRoundedPartial(props.compatibility.valorSexoVenMar)}%
              </div>
            </p>
          </InfoPopoverRowContent>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={mars}
                alt=""
              />
              +
              <img
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
                src={mars}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoSexoMarMar}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorSexoMarMar
                    )}%`,
                    backgroundColor: palette.blue,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorSexoMarMar)
                    }%`,
                    backgroundColor: palette.blue,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.blue,
                }}
              >
                {getRoundedPartial(props.compatibility.valorSexoMarMar)}%
              </div>
            </p>
          </InfoPopoverRowContent>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={venus}
                alt=""
              />
              +
              <img
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 5,
                  marginRight: 5,
                }}
                src={venus}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoSexoVenVen}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorSexoVenVen
                    )}%`,
                    backgroundColor: palette.blue,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorSexoVenVen)
                    }%`,
                    backgroundColor: palette.blue,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.blue,
                }}
              >
                {getRoundedPartial(props.compatibility.valorSexoVenVen)}%
              </div>
            </p>
          </InfoPopoverRowContent>
        </InfoPopoverRow>
      </InfoPopoverBody>
    </InfoPopover>
  </>
);

export default SexBarTitle;
