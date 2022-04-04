import React from 'react';

import {
  InfoPopoverBody,
  InfoPopoverRow,
  InfoPopoverRowContent,
} from '../../pages/BodyCompatibility/CompatibilitySection/styles';
import { InfoPopover } from '..';

import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';

import { getRoundedPartial } from '../../utils';
import { palette } from '../../theme/index';

const LoveBarTitle = (props) => (
  <>
    amor
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
                src={moon}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoAmorSolLua}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAmorSolLua
                    )}%`,
                    backgroundColor: palette.pink,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAmorSolLua)
                    }%`,
                    backgroundColor: palette.pink,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.pink,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAmorSolLua)}%
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
                src={sun}
                alt=""
              />
              <div style={{ width: 150 }}>
                = {props.compatibility.grupoAmorLuaSol}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAmorLuaSol
                    )}%`,
                    backgroundColor: palette.pink,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAmorLuaSol)
                    }%`,
                    backgroundColor: palette.pink,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.pink,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAmorLuaSol)}%
              </div>
            </p>
          </InfoPopoverRowContent>
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
                = {props.compatibility.grupoAmorSolSol}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAmorSolSol
                    )}%`,
                    backgroundColor: palette.pink,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAmorSolSol)
                    }%`,
                    backgroundColor: palette.pink,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.pink,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAmorSolSol)}%
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
                = {props.compatibility.grupoAmorLuaLua}
              </div>
              <div
                style={{ width: 200, display: 'flex', alignItems: 'center' }}
              >
                <div
                  style={{
                    borderRadius: 50,
                    height: 11,
                    width: `${getRoundedPartial(
                      props.compatibility.valorAmorLuaLua
                    )}%`,
                    backgroundColor: palette.pink,
                  }}
                />
                <div
                  style={{
                    marginTop: 5,
                    marginBottom: 5,
                    height: 1,
                    width: `${
                      100 -
                      getRoundedPartial(props.compatibility.valorAmorLuaLua)
                    }%`,
                    backgroundColor: palette.pink,
                  }}
                />
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: 'flex',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: palette.pink,
                }}
              >
                {getRoundedPartial(props.compatibility.valorAmorLuaLua)}%
              </div>
            </p>
          </InfoPopoverRowContent>
        </InfoPopoverRow>
      </InfoPopoverBody>
    </InfoPopover>
  </>
);

export default LoveBarTitle;
