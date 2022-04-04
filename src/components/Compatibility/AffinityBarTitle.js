import React from 'react';

import {
  InfoPopoverBody,
  InfoPopoverRow,
  InfoPopoverRowContent,
} from '../../pages/BodyCompatibility/CompatibilitySection/styles';
import { InfoPopover } from '..';

import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import Asc from '../../assets/asc-color.svg';
import venus from '../../assets/venus.svg';
import mercury from '../../assets/mercury.svg';
import mars from '../../assets/mars.svg';

import { getRoundedPartial } from '../../utils';
import { palette } from '../../theme/index';

const AffinityBarTitle = (props) => (
  <>
    afinidade
    <InfoPopover>
      <InfoPopoverBody>
        <InfoPopoverRow>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={sun}
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
                src={sun}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoAfinSolSol}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAfinSolSol
                    )}%`,
                    backgroundColor: palette.yellow,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAfinSolSol)
                    }%`,
                    backgroundColor: palette.yellow,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.yellow,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAfinSolSol)}%
              </div>
            </p>
          </InfoPopoverRowContent>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={moon}
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
                src={moon}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoAfinLuaLua}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAfinLuaLua
                    )}%`,
                    backgroundColor: palette.yellow,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAfinLuaLua)
                    }%`,
                    backgroundColor: palette.yellow,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.yellow,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAfinLuaLua)}%
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
                = {props.compatibility.grupoAfinMarMar}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAfinMarMar
                    )}%`,
                    backgroundColor: palette.yellow,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAfinMarMar)
                    }%`,
                    backgroundColor: palette.yellow,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.yellow,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAfinMarMar)}%
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
                = {props.compatibility.grupoAfinVenVen}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAfinVenVen
                    )}%`,
                    backgroundColor: palette.yellow,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAfinVenVen)
                    }%`,
                    backgroundColor: palette.yellow,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.yellow,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAfinVenVen)}%
              </div>
            </p>
          </InfoPopoverRowContent>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={mercury}
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
                src={mercury}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoAfinMerMer}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAfinMerMer
                    )}%`,
                    backgroundColor: palette.yellow,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAfinMerMer)
                    }%`,
                    backgroundColor: palette.yellow,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.yellow,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAfinMerMer)}%
              </div>
            </p>
          </InfoPopoverRowContent>
          <InfoPopoverRowContent>
            <p style={{ display: 'flex' }}>
              <img
                style={{ height: 20, width: 20, marginRight: 5 }}
                src={Asc}
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
                src={Asc}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoAfinAscAsc}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAfinAscAsc
                    )}%`,
                    backgroundColor: palette.yellow,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAfinAscAsc)
                    }%`,
                    backgroundColor: palette.yellow,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.yellow,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAfinAscAsc)}%
              </div>
            </p>
          </InfoPopoverRowContent>
        </InfoPopoverRow>
      </InfoPopoverBody>
    </InfoPopover>
  </>
);

export default AffinityBarTitle;
