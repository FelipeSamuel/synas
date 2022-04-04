import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';

//COMPONENTS
import { ProfilePhoto, Sign, ProgressBar } from '../../../components';
import ModalBody from '../../../components/Compatibility/modalBody';
import AffinityBarTitle from '../../../components/Compatibility/AffinityBarTitle';
import LoveBarTitle from '../../../components/Compatibility/LoveBarTitle';
import SexBarTitle from '../../../components/Compatibility/SexBarTitle';
import ModalTitle from '../../../components/Compatibility/modalTitle';

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
import loading from '../../../assets/load.svg';
import profileMale from '../../../assets/perfil-male.png';
import profileFeMale from '../../../assets/perfil-female.png';

//STYLE
import {
  CompatibilityContainer,
  Wrapper,
  ResponsiveWrapper,
  ColumnsWrapper,
  ColumnContainer,
  ProgressbarText,
  PercentageBarsContainer,
  TextSlidesContainer,
  AnimatedTextBox,
  InfoTextContainer,
  Next,
  Prev,
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
  ColoredLine,
  ProgressCircleContainer,
  ArrowButton,
  Loading,
} from './styles';

// ASSETS
import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';
import { getAge, handleBirthDate, handleBirthTime } from '../../../utils';
import { palette } from '../../../theme';

registerLocale('pt-BR', pt);

export default function CompatibilitySection(props) {
  //REDUX
  const user = useSelector((state) => state.user.user);
  const pair = useSelector((state) => state.pairs.pair);
  const compatibilityRedux = useSelector(
    (state) => state.compatibility.compatibility
  );

  //GENERAL HOOKS
  const [compatibility, setCompatibility] = useState(compatibilityRedux);
  const [fullPercentage, setFullPercentage] = useState(0);
  const [graph, setGraph] = useState({});

  const affinityBarTitle = <AffinityBarTitle compatibility={compatibility} />;
  const loveBarTitle = <LoveBarTitle compatibility={compatibility} />;
  const sexBarTitle = <SexBarTitle compatibility={compatibility} />;

  useEffect(() => {
    setGraph({
      compatibility1: user.graph,
      compatibility2: pair.graph,
    });
  }, [user.graph, pair.graph]);

  useEffect(() => {
    setCompatibility(compatibilityRedux);

    setTimeout(function () {
      setFullPercentage(Math.round(compatibilityRedux.ResultadoTotal));
    }, 1700);
  }, [compatibilityRedux]);

  //INFO SLIDES
  const [activeInfoSlide, setActiveInfoSlide] = useState(0);
  const [infoSlides] = useState([
    {
      slide: 'affinity',
      content: ({ style }) => (
        <AnimatedTextBox affinity style={{ ...style }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Prev affinity onClick={() => handleChangeInfoSlide(2)} />
            <Next affinity onClick={() => handleChangeInfoSlide(1)} />
          </div>
          <InfoTextContainer affinity>
            <h2>Entenda a afinidade</h2>
            <p>
              O percentual de combinação por afinidade acontece quando os signs
              do SOL, LUA, ASC e MERCÚRIO combinam.
            </p>
            <p>
              O SOL é a personalidade das pessoas, portanto demonstra como o
              casal vai interagir e se identificar. A LUA é a forma como o casal
              expressa suas emoções e sentimentos.
            </p>
            <p>
              MERCÚRIO é ligado à comunicação, então quanto melhor o diálogo
              entre o casal, melhor a sinergia entre eles. MARTE diz sobre a
              iniciativa das pessoas e como sua atração sexual é estimulada.
              VÊNUS é ligada a forma como o casal demonstrará o amor, carinho e
              afeto um com o outro e como o relacionamento será conduzido.{' '}
            </p>
            <p>
              Obviamente, essa é uma análise de um dos pontos dentre tantos a
              serem analisados numa sinastria profunda. Para uma precisão ainda
              maior da influência dos aspectos desses planetas na relação,
              recomenda-se fazer um mapa de sinastria.
            </p>
          </InfoTextContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Prev affinity onClick={() => handleChangeInfoSlide(2)} />
            <Next affinity onClick={() => handleChangeInfoSlide(1)} />
          </div>
        </AnimatedTextBox>
      ),
    },
    {
      slide: 'love',
      content: ({ style }) => (
        <AnimatedTextBox love style={{ ...style }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Prev love onClick={() => handleChangeInfoSlide(0)} />
            <Next love onClick={() => handleChangeInfoSlide(2)} />
          </div>
          <InfoTextContainer love>
            <h2>Entenda o amor</h2>
            <p>
              O aspeto mais importante para um relacionamento duradouro é a
              harmonia entre o SOL e a LUA. Quando o SOL e a LUA estão
              compatíveis, temos uma sinergia entre os parceiros, isso ocorre
              quando há trígono (120) - mesmo elemento, sextil (60) - elementos
              compatíveis (fogo e ar ou terra e água) e conjunção (0) - mesmo
              sign.{' '}
            </p>
            <p>
              Quando não existe esses aspectos a relação é neutra. Agora quando
              o intervalo é de 90 ou 180 é um aspecto que não traz harmonia.
            </p>
            <p>
              Obviamente, essa é uma análise de um dos pontos dentre tantos a
              serem analisados numa sinastria profunda. Para uma precisão ainda
              maior da influência dos aspectos desses planetas na relação,
              recomenda-se fazer um mapa de sinastria.
            </p>
          </InfoTextContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Prev love onClick={() => handleChangeInfoSlide(0)} />
            <Next love onClick={() => handleChangeInfoSlide(2)} />
          </div>
        </AnimatedTextBox>
      ),
    },
    {
      slide: 'sex',
      content: ({ style }) => (
        <AnimatedTextBox sex style={{ ...style }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Prev sex onClick={() => handleChangeInfoSlide(1)} />
            <Next sex onClick={() => handleChangeInfoSlide(0)} />
          </div>
          <InfoTextContainer sex>
            <h2>Entenda o sexo</h2>
            <p>
              A interação entre MARTE e VÊNUS pode definir a compatibilidade
              sexual do casal, já que VÊNUS representa a sensualidade e MARTE o
              ato sexual. Esse aspecto pode variar muito dependendo da opção
              sexual do casal e da importância que o SEXO tenha na relação para
              você.
            </p>
            <p>
              Nem sempre o SEXO é o elemento de maior força em um
              relacionamento, por isso, antes de avaliar esse ponto é importante
              saber qual a expectativa do casal.
            </p>
            <p>
              Em alguns casos deve-se também olhar a interação da lua, do
              ascendente e de Plutão com Marte e Vênus.
            </p>
            <p>
              Obviamente, essa é uma análise de um dos pontos dentre tantos a
              serem analisados numa sinastria profunda. Para uma precisão ainda
              maior da influência dos aspectos desses planetas na relação,
              recomenda-se fazer um mapa de sinastria.
            </p>
          </InfoTextContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Prev sex onClick={() => handleChangeInfoSlide(1)} />
            <Next sex onClick={() => handleChangeInfoSlide(0)} />
          </div>
        </AnimatedTextBox>
      ),
    },
  ]);

  const handleChangeInfoSlide = useCallback((i) => setActiveInfoSlide(i), []);
  const infoSlideTransitions = useTransition(activeInfoSlide, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(0,0,100%)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0%)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,-50%)' },
  });

  if (Object.keys(compatibility).length) {
    return (
      <CompatibilityContainer>
        <Wrapper>
          <ColumnContainer>
            <ProfileWrapper>
              <ProfileInfoContainer>
                <ProfilePhotoContainer>
                  <ProfilePhoto src={profileMale} genero="Masculino" />
                </ProfilePhotoContainer>
                <ColoredLine />
                <ProfileRow>
                  <TextContainer>
                    <Title>
                      {user.name} - {handleBirthDate(user.birth_date)}
                    </Title>
                    <Subtitle>
                      Nascido {user.address} - às{' '}
                      {handleBirthTime(user.birth_date)}
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
                    <Sign colored sign={user.planets.Mars.sign} />
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
                {user.graph ? (
                  <img src={user.graph} alt="mapa" />
                ) : (
                  <Loading src={loading} alt="loading" />
                )}
              </ImageMapContainer>
            </ProfileWrapper>
          </ColumnContainer>
          <ColumnContainer>
            <div style={{ width: '50%' }}>
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={fullPercentage}
                duration={1.4}
                easingFunction={easeQuadInOut}
              >
                {(percentage) => (
                  <CircularProgressbarWithChildren
                    value={percentage}
                    strokeWidth={5}
                    background
                    backgroundPadding={6}
                    counterClockwise
                    styles={buildStyles({
                      strokeLinecap: 'round',
                      rotation: 0.25,
                      pathColor: palette.white,
                      backgroundColor: palette.pinkDark,
                    })}
                  >
                    <ProgressbarText>{percentage}%</ProgressbarText>
                  </CircularProgressbarWithChildren>
                )}
              </AnimatedProgressProvider>
            </div>
            <PercentageBarsContainer>
              <ProgressBar
                percentage={Math.round(compatibility.ResultadoAfinidade)}
                color={palette.yellow}
                title={affinityBarTitle}
              />
              <ProgressBar
                percentage={Math.round(compatibility.ResultadoAmor)}
                color={palette.pink}
                title={loveBarTitle}
              />
              <ProgressBar
                percentage={Math.round(compatibility.ResultadoSexo)}
                color={palette.blueMedium}
                title={sexBarTitle}
              />
            </PercentageBarsContainer>
            <TextSlidesContainer>
              {infoSlideTransitions.map(({ item, props, key }) => {
                const Page = infoSlides[item].content;
                return <Page key={key} style={props} />;
              })}
            </TextSlidesContainer>
          </ColumnContainer>
          <ColumnContainer>
            <ProfileWrapper>
              <ProfileInfoContainer>
                <ProfilePhotoContainer>
                  <ProfilePhoto src={profileFeMale} genero="Feminino" />
                </ProfilePhotoContainer>
                <ColoredLine />
                <ProfileRow>
                  <TextContainer>
                    <Title>
                      {pair.name} - {handleBirthDate(pair.birth_date)}
                    </Title>
                    <Subtitle>
                      Nascido {pair.city} - às{' '}
                      {handleBirthTime(pair.birth_date)}
                    </Subtitle>
                  </TextContainer>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={sun} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Sol</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Sun.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Sun.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Sun}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={Asc} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Ascendente</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Asc.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Asc.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Asc}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={moon} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Lua</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Moon.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Moon.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Moon}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={saturn} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Saturno</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Saturn.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Saturn.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Saturn}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={neptune} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Netuno</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Neptune.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Neptune.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Neptune}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={venus} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Vênus</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Venus.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Venus.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Venus}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={mercury} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Mercúrio</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Mercury.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Mercury.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Mercury}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={mars} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Marte</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Mars.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Mars.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Mars}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={jupiter} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Júpiter</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Jupiter.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Jupiter.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Jupiter}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={pluto} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Plutão</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Pluto.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Pluto.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Pluto}
                  </TextColumn>
                </ProfileRow>
                <ProfileRow>
                  <IconColumn>
                    <img src={uranus} alt="" />
                  </IconColumn>
                  <TextColumn className="text">Urano</TextColumn>
                  <IconColumn className="iconSmall">
                    <Sign colored sign={pair.planets.Uranus.sign} />
                  </IconColumn>
                  <TextColumn className="text">
                    {pair.planets.Uranus.sign}
                  </TextColumn>
                  <TextColumn rightAlign className="text">
                    Casa {pair.fHouses.Uranus}
                  </TextColumn>
                </ProfileRow>
              </ProfileInfoContainer>
              <ImageMapContainer>
                {user.graph ? (
                  <img src={pair.graph} alt="mapa" />
                ) : (
                  <Loading src={loading} alt="loading" />
                )}
              </ImageMapContainer>
            </ProfileWrapper>
          </ColumnContainer>
        </Wrapper>
        <ResponsiveWrapper>
          <ColumnsWrapper>
            <ColumnContainer>
              <ProfileWrapper>
                <ProfileInfoContainer>
                  <ProfilePhotoContainer>
                    <ProfilePhoto src={profileFeMale} genero="Feminino" />
                    <ArrowButton
                      onClick={() =>
                        props.handleProfileModal(
                          <ModalTitle user={user} />,
                          <ModalBody user={user} graph={graph.compatibility1} />
                        )
                      }
                      first
                    />
                  </ProfilePhotoContainer>
                  <ProfileRow>
                    <TextContainer>
                      <Title>
                        {user.Nome}, {getAge(user.birth_date)}
                      </Title>
                      <Subtitle>sign: {user.planets.Sun.sign}</Subtitle>
                      <Subtitle>Asc: {user.planets.Asc.sign}</Subtitle>
                      <Subtitle>Lua: {user.planets.Moon.sign}</Subtitle>
                    </TextContainer>
                  </ProfileRow>
                </ProfileInfoContainer>
              </ProfileWrapper>
            </ColumnContainer>
            <ColumnContainer>
              <ProgressCircleContainer>
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={fullPercentage}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                >
                  {(percentage) => (
                    <CircularProgressbarWithChildren
                      value={percentage}
                      strokeWidth={5}
                      background
                      backgroundPadding={6}
                      counterClockwise
                      styles={buildStyles({
                        strokeLinecap: 'round',
                        rotation: 0.25,
                        pathColor: palette.white,
                        backgroundColor: palette.pinkDark,
                      })}
                    >
                      <ProgressbarText>{percentage}%</ProgressbarText>
                    </CircularProgressbarWithChildren>
                  )}
                </AnimatedProgressProvider>
              </ProgressCircleContainer>
            </ColumnContainer>
            <ColumnContainer>
              <ProfileWrapper>
                <ProfileInfoContainer>
                  <ProfilePhotoContainer>
                    <ProfilePhoto src={profileFeMale} genero="Feminino" />
                    <ArrowButton
                      onClick={() =>
                        props.handleProfileModal(
                          <ModalTitle user={pair} />,
                          <ModalBody user={pair} graph={graph.compatibility2} />
                        )
                      }
                      second
                    />
                  </ProfilePhotoContainer>
                  <ProfileRow>
                    <TextContainer>
                      <Title>
                        {pair.name}, {getAge(pair.birth_date)}
                      </Title>
                      <Subtitle>sign: {pair.planets.Sun.sign}</Subtitle>
                      <Subtitle>Asc: {pair.planets.Asc.sign}</Subtitle>
                      <Subtitle>Lua: {pair.planets.Moon.sign}</Subtitle>
                    </TextContainer>
                  </ProfileRow>
                </ProfileInfoContainer>
              </ProfileWrapper>
            </ColumnContainer>
          </ColumnsWrapper>
          <PercentageBarsContainer>
            <ProgressBar
              percentage={Math.round(compatibility.ResultadoAfinidade)}
              color={palette.yellow}
              title={affinityBarTitle}
            />
            <ProgressBar
              percentage={Math.round(compatibility.ResultadoAmor)}
              color={palette.pink}
              title={loveBarTitle}
            />
            <ProgressBar
              percentage={Math.round(compatibility.ResultadoSexo)}
              color={palette.blueMedium}
              title={sexBarTitle}
            />
          </PercentageBarsContainer>
          <TextSlidesContainer>
            {infoSlideTransitions.map(({ item, props, key }) => {
              const Page = infoSlides[item].content;
              return <Page key={key} style={props} />;
            })}
          </TextSlidesContainer>
        </ResponsiveWrapper>
      </CompatibilityContainer>
    );
  } else return null;
}
