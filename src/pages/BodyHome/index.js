import React, { useState, useCallback } from 'react';
import { useTransition } from 'react-spring';
import 'react-datepicker/dist/react-datepicker.css';
import AnimateHeight from 'react-animate-height';
import { palette } from '../../theme';

//COMPONENTS
import { Button } from '../../components';

//ASSETS
import appImg1 from '../../assets/AppImg1.png';
import appImg2 from '../../assets/AppImg2.png';
import appImg3 from '../../assets/AppImg3.png';
import appImg4 from '../../assets/AppImg4.png';
import homeCircle from '../../assets/HomeCircle.png';

//STYLE
import {
  Container,
  MiddleContainer,
  MiddleSlideContainer,
  MiddleWrapperResponsive,
  AnimatedMiddleDiv,
  MiddleImageWrapper,
  MiddleTextWrapper,
  MiddleButtonsWrapper,
  MiddleButtonsWrapperResponsive,
  MiddleButtonsTitle,
  ButtonResponsive,
  Anchor,
  BottomContainer,
  BottomInfoWrapper,
  BottomImageWrapper,
  BottomInfo,
  BottomTitle,
  BottomText,
  HiddenText,
} from './styles';

export default function BodyHome(props) {
  const [activeMiddleSlide, setActiveMiddleSlide] = useState(0);
  const [
    activeMiddleSlideResponsive,
    setActiveMiddleSlideResponsive,
  ] = useState(4);

  //MIDDLE SLIDE ANIMATIONS
  const handleChangeMiddleSlide = useCallback(i => setActiveMiddleSlide(i), []);
  const middleSlideTransitions = useTransition(activeMiddleSlide, p => p, {
    from: { opacity: 0, transform: 'translate3d(-50%,50%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,-25%,0)' },
  });
  const middleSlides = [
    ({ style }) => (
      <AnimatedMiddleDiv style={{ ...style }}>
        <MiddleImageWrapper>
          <img src={appImg1} alt="Imagem" />
        </MiddleImageWrapper>
        <MiddleTextWrapper>
          O SYNAS tem a proposta de melhorar suas relações e, para isso,
          resolvemos apresentar os graus de compatibilidade entre as pessoas,
          sob uma análise astrológica.
        </MiddleTextWrapper>
      </AnimatedMiddleDiv>
    ),
    ({ style }) => (
      <AnimatedMiddleDiv style={{ ...style }}>
        <MiddleImageWrapper>
          <img src={appImg2} alt="Imagem" />
        </MiddleImageWrapper>
        <MiddleTextWrapper>
          Nossa ideia é te ajudar a encontrar pessoas que são compatíveis com
          você. Como? Fazendo uma prévia e rápida leitura digital e cruzamento
          dos dados do seu mapa astral com outras pessoas. Não é incrível?
        </MiddleTextWrapper>
      </AnimatedMiddleDiv>
    ),
    ({ style }) => (
      <AnimatedMiddleDiv style={{ ...style }}>
        <MiddleImageWrapper>
          <img src={appImg3} alt="Imagem" />
        </MiddleImageWrapper>
        <MiddleTextWrapper>
          A compatibilidade feita pelo SYNAS foi elaborada com embasamento
          astrológico profissional, calculando a posição dos planetas, a relação
          entre os signos e outros critérios necessários para ser feita a
          SINASTRIA ASTROLÓGICA entre as pessoas.
        </MiddleTextWrapper>
      </AnimatedMiddleDiv>
    ),
    ({ style }) => (
      <AnimatedMiddleDiv style={{ ...style }}>
        <MiddleImageWrapper>
          <img src={appImg4} alt="Imagem" />
        </MiddleImageWrapper>
        <MiddleTextWrapper>
          Apesar da SINASTRIA considerar vários planetas do seu mapa astral,
          criamos uma ferramenta para filtrar os signos que você gostaria de
          conhecer. Facilitamos bastante a sua vida, não é mesmo?'
        </MiddleTextWrapper>
      </AnimatedMiddleDiv>
    ),
  ];

  return (
    <Container>
      <MiddleContainer id="sobre">
        <MiddleSlideContainer>
          {middleSlideTransitions.map(({ item, props, key }) => {
            const Page = middleSlides[item];
            return <Page key={key} style={props} />;
          })}
        </MiddleSlideContainer>
        <MiddleButtonsWrapper>
          <MiddleButtonsTitle>A evolução do Match</MiddleButtonsTitle>
          <Button
            synas={activeMiddleSlide === 0}
            backgroundColor={activeMiddleSlide === 0 ? '' : palette.grey}
            fontColor={activeMiddleSlide === 0 ? palette.white : palette.purple}
            bold={activeMiddleSlide === 0}
            shadow="2px 2px 1px #00000033"
            onClick={() => handleChangeMiddleSlide(0)}
          >
            O Synas
          </Button>
          <Button
            synas={activeMiddleSlide === 1}
            backgroundColor={activeMiddleSlide === 1 ? '' : palette.grey}
            fontColor={activeMiddleSlide === 1 ? palette.white : palette.purple}
            bold={activeMiddleSlide === 1}
            shadow="2px 2px 1px #00000033"
            onClick={() => handleChangeMiddleSlide(1)}
          >
            Encontre pessoas
          </Button>
          <Button
            synas={activeMiddleSlide === 2}
            backgroundColor={activeMiddleSlide === 2 ? '' : palette.grey}
            fontColor={activeMiddleSlide === 2 ? palette.white : palette.purple}
            bold={activeMiddleSlide === 2}
            shadow="2px 2px 1px #00000033"
            onClick={() => handleChangeMiddleSlide(2)}
          >
            Informações astrológicas
          </Button>
          <Button
            synas={activeMiddleSlide === 3}
            backgroundColor={activeMiddleSlide === 3 ? '' : palette.grey}
            fontColor={activeMiddleSlide === 3 ? palette.white : palette.purple}
            bold={activeMiddleSlide === 3}
            shadow="2px 2px 1px #00000033"
            onClick={() => handleChangeMiddleSlide(3)}
          >
            Filtro de signos
          </Button>
          <Anchor smooth to="#top" style={{ width: '100%' }}>
            <Button
              onClick={props.compatibilityClick}
              shadow="2px 2px 1px #00000033"
              bold
            >
              Fazer compatibilidade
            </Button>
          </Anchor>
        </MiddleButtonsWrapper>
        <MiddleWrapperResponsive>
          <BottomTitle>
            Como definimos a compatibilidade astrológica?
          </BottomTitle>
          <BottomText>
            Criamos um mecanismo rápido para analisar aspectos importantes na
            sinastria entre as pessoas, demonstrando percentuais relevantes na
            área do amor, sexo e afinidade.
            <br />
            O SOL é a personalidade das pessoas, portanto demonstra como o casal
            vai interagir e se identificar. A LUA é a forma como o casal
            expressa suas emoções e sentimentos.
            <br />
            MERCÚRIO é ligado à comunicação, então quanto melhor o diálogo entre
            o casal, melhor a sinergia entre eles. MARTE diz sobre a iniciativa
            das pessoas e como sua atração sexual é estimulada. VÊNUS é ligada a
            forma como o casal demonstrará o amor, carinho e afeto um com o
            outro e como o relacionamento será conduzido.
          </BottomText>
          <ButtonResponsive>
            <Anchor responsive smooth to="#top" style={{ width: '100%' }}>
              <Button onClick={props.compatibilityClick} bold>
                Fazer compatibilidade
              </Button>
            </Anchor>
          </ButtonResponsive>
          <MiddleButtonsWrapperResponsive id="novo">
            <MiddleButtonsTitle>A evolução do Match</MiddleButtonsTitle>
            <ButtonResponsive>
              <Button
                synas={activeMiddleSlideResponsive === 0}
                backgroundColor={
                  activeMiddleSlideResponsive === 0 ? '' : palette.grey
                }
                fontColor={
                  activeMiddleSlideResponsive === 0
                    ? palette.white
                    : palette.purple
                }
                bold={activeMiddleSlideResponsive === 0}
                onClick={() =>
                  setActiveMiddleSlideResponsive(
                    activeMiddleSlideResponsive !== 0 ? 0 : 4
                  )
                }
              >
                O que temos de novo
              </Button>
            </ButtonResponsive>
            <AnimateHeight
              duration={1000}
              height={activeMiddleSlideResponsive === 0 ? 'auto' : '0'}
            >
              <HiddenText>
                O SYNAS veio para ultrapassar o aspecto visual e adentrar na
                esfera de conhecer o outro de forma mais subjetiva, por isso
                desenvolvemos ferramentas que permitem calcular o percentual de
                compatibilidade astrológica entre as pessoas.
              </HiddenText>
            </AnimateHeight>
            <ButtonResponsive>
              <Button
                synas={activeMiddleSlideResponsive === 1}
                backgroundColor={
                  activeMiddleSlideResponsive === 1 ? '' : palette.grey
                }
                fontColor={
                  activeMiddleSlideResponsive === 1
                    ? palette.white
                    : palette.purple
                }
                bold={activeMiddleSlideResponsive === 1}
                onClick={() =>
                  setActiveMiddleSlideResponsive(
                    activeMiddleSlideResponsive !== 1 ? 1 : 4
                  )
                }
              >
                Nossa proposta
              </Button>
            </ButtonResponsive>
            <AnimateHeight
              duration={1000}
              height={activeMiddleSlideResponsive === 1 ? 'auto' : '0'}
            >
              <HiddenText active={activeMiddleSlideResponsive === 1}>
                Melhorar toda forma de relacionamento através da aplicação de
                autoconhecimento e de aspectos astrológicos.
              </HiddenText>
            </AnimateHeight>
            <ButtonResponsive>
              <Button
                synas={activeMiddleSlideResponsive === 2}
                backgroundColor={
                  activeMiddleSlideResponsive === 2 ? '' : palette.grey
                }
                fontColor={
                  activeMiddleSlideResponsive === 2
                    ? palette.white
                    : palette.purple
                }
                bold={activeMiddleSlideResponsive === 2}
                onClick={() =>
                  setActiveMiddleSlideResponsive(
                    activeMiddleSlideResponsive !== 2 ? 2 : 4
                  )
                }
              >
                Equipe responsável
              </Button>
            </ButtonResponsive>
            <AnimateHeight
              duration={1000}
              height={activeMiddleSlideResponsive === 2 ? 'auto' : '0'}
            >
              <HiddenText active={activeMiddleSlideResponsive === 2}>
                Somos uma equipe multidisciplinar, que engloba áreas de gestão,
                marketing e tecnologia e, claro, apaixonados por astrologia.
              </HiddenText>
            </AnimateHeight>
            <ButtonResponsive>
              <Button
                synas={activeMiddleSlideResponsive === 3}
                backgroundColor={
                  activeMiddleSlideResponsive === 3 ? '' : palette.grey
                }
                fontColor={
                  activeMiddleSlideResponsive === 3
                    ? palette.white
                    : palette.purple
                }
                bold={activeMiddleSlideResponsive === 3}
                onClick={() =>
                  setActiveMiddleSlideResponsive(
                    activeMiddleSlideResponsive !== 3 ? 3 : 4
                  )
                }
              >
                Nossos valores
              </Button>
            </ButtonResponsive>
            <AnimateHeight
              duration={1000}
              height={activeMiddleSlideResponsive === 3 ? 'auto' : '0'}
            >
              <HiddenText active={activeMiddleSlideResponsive === 3}>
                1. Valorização e respeito às pessoas.
                <br />
                2. Incentivar o auto conhecimento. <br />
                3. Passar informações certeiras e objetivas sobre
                relacionamentos.
              </HiddenText>
            </AnimateHeight>
          </MiddleButtonsWrapperResponsive>
        </MiddleWrapperResponsive>
      </MiddleContainer>
      <BottomContainer id="compatibilidade">
        <BottomInfoWrapper>
          <BottomInfo>
            <BottomTitle>
              Como definimos a compatibilidade astrológica?
            </BottomTitle>
            <BottomText>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criamos um mecanismo rápido
              para analisar aspectos importantes na sinastria entre as pessoas,
              demonstrando percentuais relevantes na área do amor, sexo e
              afinidade.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O SOL é a personalidade das
              pessoas, portanto demonstra como o casal vai interagir e se
              identificar. A LUA é a forma como o casal expressa suas emoções e
              sentimentos.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MERCÚRIO é ligado à
              comunicação, então quanto melhor o diálogo entre o casal, melhor a
              sinergia entre eles. MARTE diz sobre a iniciativa das pessoas e
              como sua atração sexual é estimulada. VÊNUS é ligada a forma como
              o casal demonstrará o amor, carinho e afeto um com o outro e como
              o relacionamento será conduzido.
            </BottomText>
            <Anchor responsive smooth to="/#top" style={{ width: '100%' }}>
              <Button onClick={props.testNowClick} bold>
                QUERO TESTAR AGORA
              </Button>
            </Anchor>
            {/* <BottomTerms onClick={() => setShowModal(true)}>
              Termos de uso
            </BottomTerms> */}
          </BottomInfo>
        </BottomInfoWrapper>
        <BottomImageWrapper>
          <img src={homeCircle} alt="Imagem" />
        </BottomImageWrapper>
      </BottomContainer>
    </Container>
  );
}
