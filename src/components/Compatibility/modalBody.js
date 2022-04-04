import React from 'react';

import { Sign } from '..';

import {
  IconColumn,
  ImageMapContainer,
  ModalWrapper,
  ProfileInfoContainer,
  ProfileRow,
  TextColumn,
} from '../../pages/BodyCompatibility/CompatibilitySection/styles';

import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import Asc from '../../assets/asc-color.svg';
import saturn from '../../assets/saturn.svg';
import neptune from '../../assets/neptune.svg';
import venus from '../../assets/venus.svg';
import mercury from '../../assets/mercury.svg';
import mars from '../../assets/mars.svg';
import jupiter from '../../assets/jupiter.svg';
import pluto from '../../assets/pluto.svg';
import uranus from '../../assets/uranus.svg';

const ModalBody = (props) => {
  return (
    <ModalWrapper>
      <ProfileInfoContainer>
        <ProfileRow>
          <IconColumn>
            <img src={sun} alt="" />
          </IconColumn>
          <TextColumn className="text">Sol</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Sun.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Sun.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Sun : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={Asc} alt="" />
          </IconColumn>
          <TextColumn className="text">Ascendente</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Asc.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Asc.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Asc : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={moon} alt="" />
          </IconColumn>
          <TextColumn className="text">Lua</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Moon.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Moon.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Moon : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={saturn} alt="" />
          </IconColumn>
          <TextColumn className="text">Saturno</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Saturn.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Saturn.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Saturn : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={neptune} alt="" />
          </IconColumn>
          <TextColumn className="text">Netuno</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Neptune.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Neptune.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Neptune : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={venus} alt="" />
          </IconColumn>
          <TextColumn className="text">Vênus</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Venus.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Venus.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Venus : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={mercury} alt="" />
          </IconColumn>
          <TextColumn className="text">Mercúrio</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Mercury.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Mercury.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Mercury : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={mars} alt="" />
          </IconColumn>
          <TextColumn className="text">Marte</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Mars.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Mars.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Mars : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={jupiter} alt="" />
          </IconColumn>
          <TextColumn className="text">Júpiter</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Jupiter.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Jupiter.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Jupiter : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={pluto} alt="" />
          </IconColumn>
          <TextColumn className="text">Plutão</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Pluto.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Pluto.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Pluto : ''}
          </TextColumn>
        </ProfileRow>
        <ProfileRow>
          <IconColumn>
            <img src={uranus} alt="" />
          </IconColumn>
          <TextColumn className="text">Urano</TextColumn>
          <IconColumn>
            <Sign
              colored
              sign={props.user ? props.user.planets.Uranus.sign : ''}
            />
          </IconColumn>
          <TextColumn className="text">
            {props.user ? props.user.planets.Uranus.sign : ''}
          </TextColumn>
          <TextColumn rightAlign className="text">
            Casa {props.user ? props.user.fHouses.Uranus : ''}
          </TextColumn>
        </ProfileRow>
      </ProfileInfoContainer>
      <ImageMapContainer>
        <img src={props.graph ? props.graph : ''} alt="mapa" />
      </ImageMapContainer>
    </ModalWrapper>
  );
};

export default ModalBody;
