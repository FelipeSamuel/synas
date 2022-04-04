import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import moment from 'moment';

//COMPONENTS
import { ProfilePhoto } from '../../components';

//LOCAL COMPONENTS
import ProfileSection from './ProfileSection';

//ASSETS
import logo from '../../assets/logo-2.png';
import profileMale from '../../assets/perfil-male.png';
import profileFemale from '../../assets/perfil-female.png';

//STYLE
import {
  Container,
  LoggedInContainer,
  ResponsiveLoggedInHeader,
  ResponsiveDots,
  ResponsiveDotsContent,
  MenuListResponsive,
  MenuItem,
  ImageLogo,
  Text,
  ResponsiveResumedInfo,
  TextColumn,
  SmallText,
} from './styles';
import { getSignOnPTBR, handleBirthDate, handleBirthTime } from '../../utils';

export default function BodyHome(props) {
  //REDUX
  const user = useSelector((state) => state.user.user);

  //GENERAL HOOKS
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <Container>
      <LoggedInContainer>
        <ResponsiveLoggedInHeader>
          <ImageLogo src={logo} alt="logo" />
          <Text>Olá, {user.name}!</Text>
          <ResponsiveDotsContent onClick={() => setMenuMobile(!menuMobile)}>
            <ResponsiveDots />
          </ResponsiveDotsContent>
        </ResponsiveLoggedInHeader>
        <ResponsiveResumedInfo>
          <TextColumn>
            <ProfilePhoto
              src={user.sex === 'M' ? profileMale : profileFemale}
              genero={user.sex === 'M' ? 'Masculino' : 'Feminino'}
            />
          </TextColumn>
          <TextColumn>
            <SmallText>Sol: {getSignOnPTBR(user.planets.Sun.sign)}</SmallText>
            <SmallText>Asc: {getSignOnPTBR(user.planets.Asc.sign)}</SmallText>
            <SmallText>Lua: {getSignOnPTBR(user.planets.Moon.sign)}</SmallText>
          </TextColumn>
          <TextColumn>
            <SmallText>{handleBirthDate(user.birth_date)}</SmallText>
            <SmallText>{user.address}</SmallText>
            <SmallText>às {handleBirthTime(user.birth_date)}</SmallText>
          </TextColumn>
        </ResponsiveResumedInfo>
        <ProfileSection
          handleCompatibility={props.handleCompatibility}
          handlePercentage={props.handlePercentage}
          handleOpenLoadingModal={props.handleOpenLoadingModal}
          handleCloseLoadingModal={props.handleCloseLoadingModal}
        />
        <MenuListResponsive menuMobile={menuMobile}>
          {/* <MenuItem>
            <HashLink
              smooth
              to="/#compatibilidade"
              onClick={() => {
                setMenuMobile(!menuMobile);
                props.handleEdit();
              }}
            >
              Editar perfil
            </HashLink>
          </MenuItem> */}
          <MenuItem>
            <HashLink
              smooth
              onClick={() => {
                setMenuMobile(!menuMobile);
                props.handleCompatibility();
              }}
            >
              Nova Compatibilidade
            </HashLink>
          </MenuItem>
          <MenuItem>
            <HashLink
              smooth
              // to="/#sobre"
              onClick={() => {
                setMenuMobile(!menuMobile);
                props.handleExit();
              }}
            >
              Sair
            </HashLink>
          </MenuItem>
        </MenuListResponsive>
      </LoggedInContainer>
    </Container>
  );
}
