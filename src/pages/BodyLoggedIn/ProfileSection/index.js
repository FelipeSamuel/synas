import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnimateHeight from 'react-animate-height';

//ASSETS
import loading from '../../../assets/load.svg';

//COMPONENTS
import { ProfilePhoto, Button, Sign } from '../../../components';

//LOCAL COMPONENTS
import FormPairResponsive from './FormPairResponsive';

//ASSETS
import moon from '../../../assets/moon.png';
import sun from '../../../assets/sun.png';
import Asc from '../../../assets/asc-color.svg';
import saturn from '../../../assets/saturn.svg';
import neptune from '../../../assets/neptune.svg';
import venus from '../../../assets/venus.svg';
import mercury from '../../../assets/mercury.svg';
import mars from '../../../assets/mars.svg';
import jupiter from '../../../assets/jupiter.svg';
import pluto from '../../../assets/pluto.svg';
import uranus from '../../../assets/uranus.svg';
import profileMale from '../../../assets/perfil-male.png';
import profileFeMale from '../../../assets/perfil-female.png';

//STYLE
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileInfoContainer,
  ProfilePhotoContainer,
  ImageMapContainer,
  ProfileRow,
  TextContainer,
  Title,
  Subtitle,
  IconColumn,
  TextColumn,
  ArrowButton,
  ColoredLine,
  Wrapper,
  ResponsiveWrapper,
  ButtonResponsive,
  HiddenInfo,
  PairWrapper,
  Loading,
} from './styles';

import { handleBirthDate, handleBirthTime } from '../../../utils';
import { palette } from '../../../theme';

export default function ProfileSection(props) {
  //REDUX
  const user = useSelector((state) => state.user.user);

  //GENERAL HOOKS
  const [activeButtonSlide, setActiveButtonSlide] = useState(0);

  return (
    <ProfileContainer>
      <Wrapper>
        <ProfileWrapper>
          <ProfileInfoContainer id="perfil">
            <ProfilePhotoContainer>
              <ProfilePhoto
                src={user.sex === 'M' ? profileMale : profileFeMale}
                genero={user.sex === 'M' ? 'Masculino' : 'Feminino'}
              />
            </ProfilePhotoContainer>
            <ColoredLine />
            <ProfileRow>
              <TextContainer>
                <Title>
                  {user.name} - {handleBirthDate(user.birth_date)}
                </Title>
                <Subtitle>
                  Nascido {user.address} - às {handleBirthTime(user.birth_date)}
                </Subtitle>
              </TextContainer>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={sun} alt="" />
              </IconColumn>
              <TextColumn className="text">Sol</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Sun.sign} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Sun.sign}</TextColumn>

              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Sun}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={Asc} alt="" />
              </IconColumn>
              <TextColumn className="text">Ascendente</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Asc.sign} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Asc.sign}</TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Asc}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={moon} alt="" />
              </IconColumn>
              <TextColumn className="text">Lua</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Moon.sign} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Moon.sign}</TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Moon}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={saturn} alt="" />
              </IconColumn>
              <TextColumn className="text">Saturno</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Saturn.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Saturn.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Saturn}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={neptune} alt="" />
              </IconColumn>
              <TextColumn className="text">Netuno</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Neptune.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Neptune.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Neptune}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={venus} alt="" />
              </IconColumn>
              <TextColumn className="text">Vênus</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Venus.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Venus.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Venus}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={mercury} alt="" />
              </IconColumn>
              <TextColumn className="text">Mercúrio</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Mercury.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Mercury.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Mercury}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={mars} alt="" />
              </IconColumn>
              <TextColumn className="text">Marte</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Mars.sign} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Mars.sign}</TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Mars}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={jupiter} alt="" />
              </IconColumn>
              <TextColumn className="text">Júpiter</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Jupiter.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Jupiter.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Jupiter}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={pluto} alt="" />
              </IconColumn>
              <TextColumn className="text">Plutão</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Pluto.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Pluto.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Pluto}
              </TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn>
                <img src={uranus} alt="" />
              </IconColumn>
              <TextColumn className="text">Urano</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Uranus.sign} />
              </IconColumn>
              <TextColumn className="text">
                {user.planets.Uranus.sign}
              </TextColumn>
              <TextColumn rightAlign className="text">
                Casa {user.fHouses.Uranus}
              </TextColumn>
            </ProfileRow>
          </ProfileInfoContainer>
          <ImageMapContainer>
            {user.graph ? (
              <img src={user.graph} alt="mapa" />
            ) : (
              <Loading src={loading} alt="loading" />
            )}
          </ImageMapContainer>
        </ProfileWrapper>
      </Wrapper>
      <ResponsiveWrapper>
        <ButtonResponsive first>
          <Button
            synas
            fontColor={palette.white}
            borderColor={palette.white}
            onClick={() =>
              setActiveButtonSlide(activeButtonSlide !== 0 ? 0 : 2)
            }
          >
            FAZER COMPATIBILIDADES
          </Button>
        </ButtonResponsive>
        <AnimateHeight
          duration={1000}
          height={activeButtonSlide === 0 ? 'auto' : '0'}
          style={{ width: '100%', position: 'relative', top: '-50px' }}
        >
          <HiddenInfo first>
            <PairWrapper>
              <FormPairResponsive
                handleCompatibility={props.handleCompatibility}
                handlePercentage={props.handlePercentage}
                handleOpenLoadingModal={props.handleOpenLoadingModal}
                handleCloseLoadingModal={props.handleCloseLoadingModal}
              />
              <ArrowButton onClick={() => setActiveButtonSlide(2)} />
            </PairWrapper>
          </HiddenInfo>
        </AnimateHeight>
        <ButtonResponsive second>
          <Button
            bordered
            fontColor={palette.blue}
            borderColor={palette.blue}
            backgroundColor={palette.white}
            onClick={() =>
              setActiveButtonSlide(activeButtonSlide !== 1 ? 1 : 2)
            }
          >
            VER TODO O MEU MAPA
          </Button>
        </ButtonResponsive>
        <AnimateHeight
          duration={1000}
          height={activeButtonSlide === 1 ? 'auto' : '0'}
          style={{ width: '100%', position: 'relative', top: '-50px' }}
        >
          <HiddenInfo second>
            <ProfileWrapper>
              <ProfileInfoContainer>
                <ProfileRow>
                  <IconColumn>
                    <img src={sun} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Sol</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Sun.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Sun.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Sun}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={Asc} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Ascendente</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Asc.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Asc.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Asc}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={moon} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Lua</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Moon.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Moon.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Moon}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={saturn} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Saturno</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Saturn.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Saturn.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Saturn}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={neptune} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Netuno</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Neptune.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Neptune.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Neptune}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={venus} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Vênus</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Venus.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Venus.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Venus}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={mercury} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Mercúrio</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Mercury.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Mercury.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Mercury}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={mars} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Marte</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Mars} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Mars.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Mars}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={jupiter} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Júpiter</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Jupiter.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Jupiter.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Jupiter}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={pluto} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Plutão</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Pluto.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Pluto.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Pluto}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={uranus} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Urano</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={user.planets.Uranus.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {user.planets.Uranus.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {user.fHouses.Uranus}
                  </TextColumn>
                </ProfileRow>
              </ProfileInfoContainer>
              <ImageMapContainer>
                {<img src={user.graph} alt="mapa" />}
              </ImageMapContainer>
              <ArrowButton onClick={() => setActiveButtonSlide(2)} />
            </ProfileWrapper>
          </HiddenInfo>
        </AnimateHeight>
      </ResponsiveWrapper>
      {/* <ColoredLine>
        <ArrowButton onClick={props.handleArrowClick} />
      </ColoredLine> */}
    </ProfileContainer>
  );
}
