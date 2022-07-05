import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { palette } from '../../theme';

//COMPONENTS
import Button from '../Button';
import InfoPopover from '../InfoPopover';

//ASSETS
import logo from '../../assets/logo-beta.png';

//STYLE
import {
  MenuContainer,
  MenuWrapper,
  ImageLogo,
  MenuList,
  MenuItem,
  InfoPopoverBody,
  InfoPopoverText,
} from './style';

export default function Header(props) {
  //REDUX
  const userRedux = useSelector((state) => state.user.user);

  //GENERAL HOOKS
  const [user, setUser] = useState(userRedux);

  useEffect(() => {
    setUser(userRedux);
  }, [userRedux]);

  return (
    <MenuContainer id="top">
      <MenuWrapper>
        <ImageLogo src={logo} alt="logo" />
        <InfoPopover>
          <InfoPopoverBody>
            <InfoPopoverText>
              O Synas está em sua fase beta. Mas o que significa isso? Significa que está sendo testado, novos componentes estão sendo desenvolvidos e adicionados,
              e o algoritmo por trás dos cálculos astrais está sendo constantemente calibrado sob o cuidado de um astrólogo.
            </InfoPopoverText>
          </InfoPopoverBody>
        </InfoPopover>
        {/* <ResponsiveDotsContent onClick={() => setMenuMobile(!menuMobile)}>
          <ResponsiveDots />
        </ResponsiveDotsContent> */}
        <MenuList>
          <MenuItem>
            {user ? (
              <HashLink smooth to="/#sobre">
                <Button
                  fontSize="1.1em"
                  transparency={1}
                  hoverColor={palette.purple}
                  onClick={props.clickTheApp}
                >
                  O Aplicativo
                </Button>
              </HashLink>
            ) : (
              <HashLink smooth to="/#sobre">
                <Button
                  fontSize="1.1em"
                  transparency={1}
                  hoverColor={palette.purple}
                >
                  O Aplicativo
                </Button>
              </HashLink>
            )}
          </MenuItem>
          {/*
          <MenuItem>
            {user ? (
              <HashLink smooth to="/#perfil">
                <Button
                  fontSize="1.1em"
                  transparency={1}
                  hoverColor={palette.purple}
                  onClick={props.clickCompatibilityTest}
                >
                  Teste de compatibilidade
                </Button>
              </HashLink>
            ) : (
              <HashLink smooth to="/#compatibilidade">
                <Button
                  fontSize="1.1em"
                  transparency={1}
                  hoverColor={palette.purple}
                >
                  Teste de compatibilidade
                </Button>
              </HashLink>
            )}
          </MenuItem>
          
          <MenuItem>
            {user ? (
              <Button bordered width="14vw" onClick={props.clickExit}>
                <b>Sair</b>
              </Button>
            ) : (
              <Button bordered width="14vw" onClick={props.clickEnter}>
                <b>Entrar</b>
              </Button>
            )}
          </MenuItem>
          */}
        </MenuList>
        {/* <MenuListResponsive menuMobile={menuMobile}>
          <MenuItem>
            <HashLink
              smooth
              to="/#sobre"
              onClick={() => setMenuMobile(!menuMobile)}
            >
              Compatibilidade astrológica
            </HashLink>
          </MenuItem>
          <MenuItem>
            <HashLink
              smooth
              to="/#novo"
              onClick={() => setMenuMobile(!menuMobile)}
            >
              O Synas
            </HashLink>
          </MenuItem> */}
        {/* <MenuItem>
          <HashLink
            smooth
            to="/#blog"
            onClick={() => setMenuMobile(!menuMobile)}
          >
            Blog
          </HashLink>
        </MenuItem>
        <MenuItem>
          <HashLink
            smooth
            to="/#perguntas"
            onClick={() => setMenuMobile(!menuMobile)}
          >
            Perguntas frequentes
          </HashLink>
        </MenuItem> */}
        {/* </MenuListResponsive> */}
      </MenuWrapper>
    </MenuContainer>
  );
}
