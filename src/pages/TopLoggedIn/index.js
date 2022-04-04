import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//COMPONENTS
import { ProfilePhoto, Sign } from '../../components';

//LOCAL COMPONENTS
import FormPair from './FormPair';

//ASSETS
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import Asc from '../../assets/asc-color.svg';
import profileMale from '../../assets/perfil-male.png';
import profileFemale from '../../assets/perfil-female.png';

//UTILS
import { handleBirthDate, handleBirthTime } from '../../utils';
import { postCompatibilityLogin } from '../../services';
import { Creators as CompatibilityActions } from '../../store/ducks/compatibility';

//STYLE
import {
  MainWrapper,
  ContainersWrapper,
  ProfileContainer,
  ProfileRow,
  TextContainer,
  Title,
  Subtitle,
  IconColumn,
  TextColumn,
} from './styles';

export default function TopLoggedIn(props) {
  const user = useSelector((state) => state.user.user);
  const compatibilityToken = useSelector(
    (state) => state.compatibility.compatibilityToken
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!compatibilityToken) {
      const fetchCompatibilityToken = async () => {
        const response = await postCompatibilityLogin();
        dispatch(
          CompatibilityActions.setCompatibilityToken(response.access_token)
        );
      };

      fetchCompatibilityToken();
    }
  }, []);

  if (user && user.id) {
    return (
      <MainWrapper>
        <ContainersWrapper>
          <ProfileContainer>
            <ProfileRow>
              <ProfilePhoto
                src={user.sex === 'M' ? profileMale : profileFemale}
                genero={user.sex === 'M' ? 'Masculino' : 'Feminino'}
              />
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
              <IconColumn className="icon">
                <img src={sun} alt="" />
              </IconColumn>
              <TextColumn className="text">Sol</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Sun} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Sun.sign}</TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn className="icon">
                <img src={Asc} alt="" />
              </IconColumn>
              <TextColumn className="text">Ascendente</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Asc.sign} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Asc.sign}</TextColumn>
            </ProfileRow>
            <ProfileRow>
              <IconColumn className="icon">
                <img src={moon} alt="" />
              </IconColumn>
              <TextColumn className="text">Lua</TextColumn>
              <IconColumn className="iconSmall">
                <Sign colored sign={user.planets.Moon.sign} />
              </IconColumn>
              <TextColumn className="text">{user.planets.Moon.sign}</TextColumn>
            </ProfileRow>
            {/* <ArrowButton onClick={props.handleProfile} /> */}
          </ProfileContainer>
          <FormPair
            handleCompatibility={props.handleCompatibility}
            handleCompatibilityScroll={props.handleCompatibilityScroll}
            handlePercentage={props.handlePercentage}
            handleOpenLoadingModal={props.handleOpenLoadingModal}
            handleCloseLoadingModal={props.handleCloseLoadingModal}
          />
        </ContainersWrapper>
      </MainWrapper>
    );
  } else return null;
}
