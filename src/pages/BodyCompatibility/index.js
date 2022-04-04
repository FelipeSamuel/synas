import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { palette } from '../../theme';

//COMPONENTS
import { Button } from '../../components';

//LOCAL COMPONENTS
import CompatibilitySection from './CompatibilitySection';

//ASSETS
import logo from '../../assets/logo-2.png';

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
  ButtonContainer,
} from './styles';

export default function BodyHome(props) {
  //GENERAL HOOKS
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <Container>
      <LoggedInContainer>
        <ResponsiveLoggedInHeader className="gradientBorder">
          <ImageLogo src={logo} alt="logo" />
          <Text>Synas</Text>
          <ResponsiveDotsContent onClick={() => setMenuMobile(!menuMobile)}>
            <ResponsiveDots />
          </ResponsiveDotsContent>
        </ResponsiveLoggedInHeader>
        <CompatibilitySection
          handleProfileModal={(ModalTitle, ModalBody) =>
            props.handleProfileModal(ModalTitle, ModalBody)
          }
        />
        <ButtonContainer>
          <Button
            bordered
            fontColor={palette.blue}
            borderColor={palette.blue}
            onClick={props.handleCompatibility}
            width="100%"
          >
            FAZER OUTRA COMPATIBILIDADE
          </Button>
        </ButtonContainer>
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
              to="/#sobre"
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
